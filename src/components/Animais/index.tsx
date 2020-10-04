import React, { useCallback, useState, useRef, useEffect } from 'react'

import Imagem1 from '../../assets/img/imagem1.jpg'
import Imagem2 from '../../assets/img/imagem2.jpg'
import Imagem3 from '../../assets/img/imagem3.jpg'
import Imagem4 from '../../assets/img/imagem4.jpg'
import Imagem5 from '../../assets/img/imagem5.jpg'
import Imagem6 from '../../assets/img/imagem6.jpg'

import { Title } from '../shared/styled'
import { Container, AnimaisLista, AnimaisDescricao } from './styles'

const Animais: React.FC = () => {
  const animaisIMGLista = useRef<HTMLUListElement>(null)
  const animaisSectionLista = useRef<HTMLDivElement>(null)

  const [listImages, setListImages] = useState<NodeListOf<HTMLElement>>()
  const [listSection, setListSection] = useState<NodeListOf<HTMLElement>>()
  const [activeItem, setActiveItem] = useState(0)

  useEffect(() => {
    setListImages(animaisIMGLista.current?.querySelectorAll('img') as NodeListOf<HTMLElement>)
    setListSection(animaisSectionLista.current?.querySelectorAll('section') as NodeListOf<HTMLElement>)
  }, [])

  useEffect(() => {
    if (listSection) {
      listSection.forEach(secton => secton.classList.remove('active'))
      listSection[activeItem].classList.add('active')
    }
  }, [activeItem, listSection])

  const handleImageClick = useCallback((index: number) => {
    return (event: Event) => {
      console.log(event.target, index)
      setActiveItem(index)
    }
  }, [])

  useEffect(() => {
    listImages?.forEach((img, index) => {
      img.addEventListener('click', handleImageClick(index))
    })
    return () => {
      listImages?.forEach((img, index) => {
        img.removeEventListener('click', handleImageClick(index))
      })
    }
  }, [listImages, handleImageClick])

  return (
    <Container id="animais" data-scroll>
      <Title>Animais Fantásticos</Title>
      <AnimaisLista ref={animaisIMGLista}>
        <li>
          <img src={Imagem1} alt="" />
        </li>
        <li>
          <img src={Imagem2} alt="" />
        </li>
        <li>
          <img src={Imagem3} alt="" />
        </li>
        <li>
          <img src={Imagem4} alt="" />
        </li>
        <li>
          <img src={Imagem5} alt="" />
        </li>
        <li>
          <img src={Imagem6} alt="" />
        </li>
      </AnimaisLista>
      <AnimaisDescricao ref={animaisSectionLista}>
        <section>
          <h2>Raposa</h2>
          <p>As raposas são animais mamíferos e onívoros pertencentes à família Canidae. São vulpídeos de porte médio, caracterizados
          por um focinho comprido e uma cauda longa e peluda.</p>
          <p>Também apresentam como particularidade suas pupilas ovais, semelhantes às pupilas verticais dos felídeos.</p>
          <p>De cerca de 40 espécies reconhecidas como raposas, somente 12 pertencem ao gênero Vulpes das "raposas verdadeiras", do
          qual a raposa vermelha é a mais comum.</p>
          <p>Também apresentam como particularidade suas pupilas ovais, semelhantes às pupilas verticais dos felídeos.</p>
        </section>

        <section>
          <h2>Esquilo</h2>
          <p>As raposas são animais mamíferos e onívoros pertencentes à família Canidae. São vulpídeos de porte médio, caracterizados
          por um focinho comprido e uma cauda longa e peluda.</p>
          <p>Também apresentam como particularidade suas pupilas ovais, semelhantes às pupilas verticais dos felídeos.</p>
          <p>De cerca de 40 espécies reconhecidas como raposas, somente 12 pertencem ao gênero Vulpes das "raposas verdadeiras", do
          qual a raposa vermelha é a mais comum.</p>
          <p>Também apresentam como particularidade suas pupilas ovais, semelhantes às pupilas verticais dos felídeos.</p>
        </section>
        <section>
          <h2>Urso</h2>
          <p>As raposas são animais mamíferos e onívoros pertencentes à família Canidae. São vulpídeos de porte médio, caracterizados
          por um focinho comprido e uma cauda longa e peluda.</p>
          <p>Também apresentam como particularidade suas pupilas ovais, semelhantes às pupilas verticais dos felídeos.</p>
          <p>De cerca de 40 espécies reconhecidas como raposas, somente 12 pertencem ao gênero Vulpes das "raposas verdadeiras", do
          qual a raposa vermelha é a mais comum.</p>
          <p>Também apresentam como particularidade suas pupilas ovais, semelhantes às pupilas verticais dos felídeos.</p>
        </section>
        <section>
          <h2>Lobo</h2>
          <p>As raposas são animais mamíferos e onívoros pertencentes à família Canidae. São vulpídeos de porte médio, caracterizados
          por um focinho comprido e uma cauda longa e peluda.</p>
          <p>Também apresentam como particularidade suas pupilas ovais, semelhantes às pupilas verticais dos felídeos.</p>
          <p>De cerca de 40 espécies reconhecidas como raposas, somente 12 pertencem ao gênero Vulpes das "raposas verdadeiras", do
          qual a raposa vermelha é a mais comum.</p>
          <p>Também apresentam como particularidade suas pupilas ovais, semelhantes às pupilas verticais dos felídeos.</p>
        </section>
        <section>
          <h2>Macaco</h2>
          <p>As raposas são animais mamíferos e onívoros pertencentes à família Canidae. São vulpídeos de porte médio, caracterizados
          por um focinho comprido e uma cauda longa e peluda.</p>
          <p>Também apresentam como particularidade suas pupilas ovais, semelhantes às pupilas verticais dos felídeos.</p>
          <p>De cerca de 40 espécies reconhecidas como raposas, somente 12 pertencem ao gênero Vulpes das "raposas verdadeiras", do
          qual a raposa vermelha é a mais comum.</p>
          <p>Também apresentam como particularidade suas pupilas ovais, semelhantes às pupilas verticais dos felídeos.</p>
        </section>
        <section>
          <h2>Leão</h2>
          <p>As raposas são animais mamíferos e onívoros pertencentes à família Canidae. São vulpídeos de porte médio, caracterizados
          por um focinho comprido e uma cauda longa e peluda.</p>
          <p>Também apresentam como particularidade suas pupilas ovais, semelhantes às pupilas verticais dos felídeos.</p>
          <p>De cerca de 40 espécies reconhecidas como raposas, somente 12 pertencem ao gênero Vulpes das "raposas verdadeiras", do
          qual a raposa vermelha é a mais comum.</p>
          <p>Também apresentam como particularidade suas pupilas ovais, semelhantes às pupilas verticais dos felídeos.</p>
        </section>
      </AnimaisDescricao>
    </Container>
  )
}

export default Animais