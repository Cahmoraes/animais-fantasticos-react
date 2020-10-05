import React, { useRef, useState } from 'react';

import styles from './index.module.css';

interface SlideProps {
  id: number,
  item: string,
  url: string
}

const slides: SlideProps[] = [
  {
    id: 1,
    item: 'cachorro',
    url: 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d'
  },
  {
    id: 2,
    item: 'cachorro',
    url: 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d'
  },
]

const Slide: React.FC = () => {

  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);
  const contentRef = useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const { width } = contentRef.current?.getBoundingClientRect() as { width: number };
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }

  function slideNext() {
    if (active < slides.length - 1) setActive(active + 1);
  }

  return (
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.item}>
            <img src={slide.url} alt={slide.item} />
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Próximo</button>
      </nav>
    </section>
  );
};

export default Slide;
