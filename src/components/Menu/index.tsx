import React, { useCallback, useRef, MouseEvent, useEffect, useState } from "react"
import { Link as LinkScroll } from 'react-scroll'

import Modal, { ModalHandles } from '../Modal'
import { Navigation, DropdownMenu } from './styles'

const events = ['click', 'touchstart', 'mouseenter', 'mouseleave']


const Menu: React.FC = () => {
  const modalRef = useRef<ModalHandles>(null)
  const dropdownRef = useRef<NodeListOf<HTMLElement>>()
  const [dropdownVisible, setDropdownVisible] = useState(false)

  const handleClickDropdown = useCallback((event: Event) => {
    event.preventDefault()
    console.log('aqui')
    setDropdownVisible((state) => !state)
  }, [setDropdownVisible])

  const handleClickOutsite = useCallback((element: HTMLElement) => {
    return (event: Event) => {
      const target = event.target as HTMLElement
      if (!element.contains(target)) {
        setDropdownVisible(false)
        events.forEach(userEvent =>
          window.removeEventListener(userEvent, handleClickOutsite(element)))
      }
    }
  }, [])

  useEffect(() => {
    dropdownRef.current = document.querySelectorAll('[data-dropdown]')
    dropdownRef.current.forEach(li => {
      events.forEach(event => {
        li.addEventListener(event, handleClickDropdown)
        window.addEventListener(event, handleClickOutsite(li))
      })
    })

  }, [handleClickDropdown, handleClickOutsite])

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
          </LinkScroll>
        </li>
        <li data-dropdown>
          <a href="/sobre">Sobre</a>
          {
            dropdownVisible &&
            <DropdownMenu>
              <li><a href="/empresa">Empresa</a></li>
              <li><a href="/equipe">Equipe</a></li>
              <li><a href="/investidores">Investidores</a></li>
            </DropdownMenu>
          }
        </li>
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