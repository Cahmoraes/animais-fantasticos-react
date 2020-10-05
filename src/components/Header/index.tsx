import React, { useCallback, useRef, MouseEvent } from "react"
import { Link as LinkScroll } from 'react-scroll'
import Modal, { ModalHandles } from '../Modal'
import { Navigation } from './styles'



const Menu: React.FC = () => {

  const modalRef = useRef<ModalHandles>(null)

  const handleOpenModal = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    modalRef.current?.openModal(event as MouseEvent<HTMLElement>)
  }, [])

  return (
    <Navigation>
      <ul>
        <li>
          <LinkScroll
            smooth={true}
            duration={500}
            to="animais"
          >
            Animais
          </LinkScroll></li>
        <li>
          <LinkScroll
            to="faq"
            smooth={true}
            duration={500}
          >
            Faq
          </LinkScroll>
        </li>
        <li>
          <LinkScroll
            to="contato"
            smooth={true}
            duration={500}
          >
            Contato
          </LinkScroll>
        </li>
        <li><a href="/" onClick={handleOpenModal}>Login →</a></li>
      </ul>
      <Modal ref={modalRef} />
    </Navigation>
  )
}

export default Menu