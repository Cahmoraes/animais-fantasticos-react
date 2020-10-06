import debounce from '../debounce';

interface IDistProps {
  finalPosition: number
  startX: number
  movement: number
  movePosition?: number
}

interface IIndexProps {
  next?: number
  prev?: number
  active?: number
}

interface ISlideArrayProps {
  position: number
  element: HTMLElement
}

export class Slide {

  private slide: HTMLElement
  private dist: IDistProps
  private changeEvent: Event
  protected wrapper: HTMLElement
  protected activeClass: string
  protected index: IIndexProps = {}
  protected slideArray: ISlideArrayProps[] = []

  constructor(slide: string, wrapper: string) {
    this.slide = document.querySelector(slide) as HTMLElement;
    this.wrapper = document.querySelector(wrapper) as HTMLElement;
    this.dist = { finalPosition: 0, startX: 0, movement: 0 };
    this.activeClass = 'active';
    this.changeEvent = new Event('changeEvent');
  }

  transition(active: boolean) {
    this.slide.style.transition = active ? 'transform .3s' : '';
  }

  moveSlide(distX: number) {
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
  }

  updatePosition(clientX: number) {
    this.dist.movement = (this.dist.startX - clientX) * 1.6;
    return this.dist.finalPosition - this.dist.movement;
  }

  onStart(event: Event) {
    let movetype;
    if (event.type === 'mousedown') {
      event.preventDefault();
      this.dist.startX = (event as MouseEvent).clientX;
      movetype = 'mousemove';
    } else {
      this.dist.startX = (event as TouchEvent).changedTouches[0].clientX;
      movetype = 'touchmove';
    }
    this.wrapper.addEventListener(movetype, this.onMove);
    this.transition(false);
  }

  onMove(event: Event) {
    const pointerPosition = (event.type === 'mousemove') ? (event as MouseEvent).clientX : (event as TouchEvent).changedTouches[0].clientX;
    const finalPosition = this.updatePosition(pointerPosition);
    this.moveSlide(finalPosition);
  }

  onEnd(event: Event) {
    const movetype = (event.type === 'mouseup') ? 'mousemove' : 'touchmove';
    this.wrapper.removeEventListener(movetype, this.onMove);
    this.dist.finalPosition = this.dist.movePosition as number;
    this.transition(true);
    this.changeSlideOnEnd();
  }

  changeSlideOnEnd() {
    if (this.dist.movement > 120 && this.index.next !== undefined) {
      this.activeNextSlide();
    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {
      this.activePrevSlide();
    } else {
      this.changeSlide(this.index.active as number);
    }
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('touchstart', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
    this.wrapper.addEventListener('touchend', this.onEnd);
  }

  // Slides config

  slidePosition(slide: HTMLElement) {
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margin);
  }

  slidesConfig() {
    this.slideArray = [...this.slide.children].map((element) => {
      const position = this.slidePosition(element as HTMLElement);
      return { position, element } as ISlideArrayProps;
    });
  }

  slidesIndexNav(index: number) {
    const last = this.slideArray.length - 1;
    this.index = {
      prev: index ? index - 1 : undefined,
      active: index,
      next: index === last ? undefined : index + 1,
    };
  }

  changeSlide(index: number) {
    const activeSlide = this.slideArray[index];
    this.moveSlide(activeSlide.position);
    this.slidesIndexNav(index);
    this.dist.finalPosition = activeSlide.position;
    this.changeActiveClass();
    this.wrapper.dispatchEvent(this.changeEvent);
  }

  changeActiveClass() {
    this.slideArray.forEach(item => item.element.classList.remove(this.activeClass));
    this.slideArray[this.index.active as number].element.classList.add(this.activeClass);
  }

  activePrevSlide() {
    if (this.index.prev !== undefined) this.changeSlide(this.index.prev);
  }

  activeNextSlide() {
    if (this.index.next !== undefined) this.changeSlide(this.index.next);
  }

  onResize() {
    setTimeout(() => {
      this.slidesConfig();
      this.changeSlide(this.index.active as number);
    }, 1000);
  }

  addResizeEvent() {
    window.addEventListener('resize', this.onResize);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);

    this.activePrevSlide = this.activePrevSlide.bind(this);
    this.activeNextSlide = this.activeNextSlide.bind(this);

    this.onResize = debounce(this.onResize.bind(this), 200);
  }

  init() {
    this.bindEvents();
    this.transition(true);
    this.addSlideEvents();
    this.slidesConfig();
    this.addResizeEvent();
    this.changeSlide(0);
    return this;
  }
}

export default class SlideNav extends Slide {

  private prevElement: HTMLElement | undefined
  private nextElement: HTMLElement | undefined
  private control: HTMLElement | Element | undefined
  private controlArray: Element[] = []

  constructor(slide: string, wrapper: string) {
    super(slide, wrapper);
    this.bindControlEvents();
  }

  addArrow(prev: string, next: string) {
    this.prevElement = document.querySelector(prev) as HTMLElement;
    this.nextElement = document.querySelector(next) as HTMLElement;
    this.addArrowEvent();
  }

  addArrowEvent() {
    (this.prevElement as HTMLElement).addEventListener('click', this.activePrevSlide);
    (this.nextElement as HTMLElement).addEventListener('click', this.activeNextSlide);
  }

  createControl() {
    const control = document.createElement('ul');
    control.dataset.control = 'slide';
    this.slideArray.forEach((item, index) => {
      control.innerHTML += `<li><a href="#slide${index + 1}">${index + 1}</a></li>`;
    });
    this.wrapper.appendChild(control);
    return control;
  }

  eventControl(item: Element, index: number) {
    item.addEventListener('click', (event: Event) => {
      event.preventDefault();
      this.changeSlide(index);
    });
    this.wrapper.addEventListener('changeEvent', this.activeControlItem);
  }

  activeControlItem() {
    this.controlArray.forEach(item => item.classList.remove(this.activeClass));
    this.controlArray[this.index.active as number].classList.add(this.activeClass);
  }

  addControl(customControl: string) {
    this.control = document.querySelector(customControl) || this.createControl();
    this.controlArray = [...(this.control as HTMLElement).children];

    this.activeControlItem();
    this.controlArray.forEach(this.eventControl);
  }

  bindControlEvents() {
    this.eventControl = this.eventControl.bind(this);
    this.activeControlItem = this.activeControlItem.bind(this);
  }
}
