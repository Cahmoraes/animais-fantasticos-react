import React, { useCallback, useState, useImperativeHandle, forwardRef } from 'react'

import { Container, ModalDiv, Fechar } from './styles'

export interface ModalHandles {
  openModal: () => void
}

const Modal: React.ForwardRefRenderFunction<ModalHandles> = ({ children }, ref) => {
  const [visible, setVisible] = useState(false)

  const openModal = useCallback(() => {
    setVisible(true)
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
      <Container data-modal="container">
        <ModalDiv>
          <Fechar data-modal="fechar" onClick={handleCloseModal}>X</Fechar>
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
