import React, { useEffect } from 'react';

import SlideNav from '../../utils/slide';
import styles from './index.module.css';
import { Container } from './styles'

import foto1Thumb from '../../assets/img/slide/foto1-thumb.jpg'
import foto2Thumb from '../../assets/img/slide/foto2-thumb.jpg'
import foto3Thumb from '../../assets/img/slide/foto3-thumb.jpg'
import foto4Thumb from '../../assets/img/slide/foto4-thumb.jpg'
import foto5Thumb from '../../assets/img/slide/foto5-thumb.jpg'
import foto6Thumb from '../../assets/img/slide/foto6-thumb.jpg'

import foto1 from '../../assets/img/slide/foto1.jpg'
import foto2 from '../../assets/img/slide/foto2.jpg'
import foto3 from '../../assets/img/slide/foto3.jpg'
import foto4 from '../../assets/img/slide/foto4.jpg'
import foto5 from '../../assets/img/slide/foto5.jpg'
import foto6 from '../../assets/img/slide/foto6.jpg'

const Slide: React.FC = () => {

  useEffect(() => {
    const slide = new SlideNav('[data-slide]', '[data-slide-wrapper]');
    slide.init();
    slide.addControl('[data-custom-controls]');
  }, [])

  return (
    <Container className={`${styles.galeria}`} id="carousel" data-scroll>
      <ul className={styles.customControls} data-custom-controls>
        <li><img src={foto1Thumb} alt="" /></li>
        <li><img src={foto2Thumb} alt="" /></li>
        <li><img src={foto3Thumb} alt="" /></li>
        <li><img src={foto4Thumb} alt="" /></li>
        <li><img src={foto5Thumb} alt="" /></li>
        <li><img src={foto6Thumb} alt="" /></li>
      </ul>
      <div className={styles.slideWrapper} data-slide-wrapper>
        <ul className={styles.slide} data-slide>
          <li><img src={foto1} alt="" /></li>
          <li><img src={foto2} alt="" /></li>
          <li><img src={foto3} alt="" /></li>
          <li><img src={foto4} alt="" /></li>
          <li><img src={foto5} alt="" /></li>
          <li><img src={foto6} alt="" /></li>
        </ul>
      </div>
    </Container>
  );
};

export default Slide;
