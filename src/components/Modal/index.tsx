import React, { useCallback, useState, useImperativeHandle, forwardRef, useRef, MouseEvent } from 'react'

import { Container, ModalDiv, Fechar } from './styles'

export interface ModalHandles {
  openModal: (Event: MouseEvent<HTMLElement>) => void
}

const Modal: React.ForwardRefRenderFunction<ModalHandles> = ({ children }, ref) => {
  const [visible, setVisible] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  const openModal = useCallback((event: MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setVisible(true)
    const clickOutside = (event: Event) => {
      const target = event.target as HTMLElement
      if (!modalRef.current?.contains(target)) {
        setVisible(false)
        window.removeEventListener('click', clickOutside)
      }
    }
    window.addEventListener('click', clickOutside)
  }, [])

  const handleCloseModal = useCallback(() => {
    setVisible(false)
  }, [])

  useImperativeHandle(ref, () => {
    return {
      openModal
    }
  })

  if (!visible) return null
  else
    return (
      <Container>
        <ModalDiv ref={modalRef}>
          <Fechar onClick={handleCloseModal}>X</Fechar>
          <form>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" />
            <button type="submit">Entrar</button>
          </form>
        </ModalDiv>
      </Container>
    )
}

export default forwardRef(Modal)
