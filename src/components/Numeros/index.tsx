import React, { useState, useRef, useEffect, useCallback } from 'react'
import { IAnimais } from '../../interfaces/IAnimais'
import { Title } from '../shared/styled'
import AnimaisData from '../../api/animaisapi.json'
import { Container, NumerosGrid } from './styles'

const Numeros: React.FC = () => {
  const [animaisDados] = useState<IAnimais[]>(() => AnimaisData as IAnimais[])
  const totaisRef = useRef<HTMLElement[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const animaNumeros = useCallback(() => {
    totaisRef.current.forEach(numero => {
      const total = +numero.innerText
      const inscremento = Math.floor(total / 100)
      let start = 0
      const timer = setInterval(() => {
        start = start + inscremento
        numero.innerText = start.toString()
        if (start > total) {
          numero.innerText = total.toString()
          clearInterval(timer)
        }
      }, 25 * Math.random())
    })
  }, [totaisRef])

  useEffect(() => {
    totaisRef.current.push(...document.querySelectorAll('[data-total]') as NodeListOf<HTMLElement>)

    const handleMutation: MutationCallback = (mutation: MutationRecord[]) => {
      if ((mutation[0].target as HTMLElement).classList.contains('active')) {
        animaNumeros()
        observer.disconnect()
      }
    }

    const observeTarget = containerRef.current as HTMLElement
    const observer = new MutationObserver(handleMutation)

    observer.observe(observeTarget, { attributes: true })

  }, [totaisRef, animaNumeros])

  if (animaisDados.length < 1) return null
  else
    return (
      <Container data-scroll ref={containerRef}>
        <Title>Números</Title>
        {
          animaisDados.map(animal => (
            <NumerosGrid key={animal.specie}>
              <h3>{animal.specie}</h3>
              <span data-total>{animal.total}</span>
            </NumerosGrid>
          ))
        }

      </Container>
    )
}

export default Numeros