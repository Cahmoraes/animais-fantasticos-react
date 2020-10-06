import React, { useEffect, useCallback, useState } from 'react'

import Menu from '../../components/Header'
import Animais from '../../components/Animais'
import Faq from '../../components/Faq'
import Numeros from '../../components/Numeros'
import Contato from '../../components/Contato'
import Footer from '../../components/Footer'
import debounce from '../../utils/debounce'
import Slide from '../../components/Slide'

interface ElementsConfig {
  element: HTMLElement,
  offset: number
}

const Home: React.FC = () => {

  const [elements, setElements] = useState<Array<ElementsConfig>>([])

  useEffect(() => {
    setElements([...document.querySelectorAll('[data-scroll]')].map(element => {
      return ({
        element,
        offset: (element as HTMLElement).offsetTop - window.innerHeight * 0.4
      }) as ElementsConfig
    }))
  }, [])

  useEffect(() => {
    if (elements.length > 0) {
      elements[0].element.classList.add('active')
    }
  }, [elements])

  const handleScroll = useCallback(() => {
    if (elements.length > 0) {
      elements.forEach(reference => {
        if (window.pageYOffset > reference.offset) {
          reference.element.classList.add('active')
        } else if (reference.element.classList.contains('active')) {
          reference.element.classList.remove('active')
        }
      })
    }
  }, [elements])

  useEffect(() => {
    const callback = debounce(handleScroll)
    window.addEventListener('scroll', callback)
    return () => {
      window.removeEventListener('scroll', callback)
    }
  }, [handleScroll])

  return (
    <>
      <Menu />
      <Animais />
      <Faq />
      <Numeros />
      <Slide />
      <Contato />
      <Footer />
    </>
  )
}

export default Home