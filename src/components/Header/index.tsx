import React from "react"
import { Link as LinkScroll } from 'react-scroll'
import { Navigation } from './styles'

const Menu: React.FC = ({ children }) => {
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
        <li><a href="https://www.origamid.com/">Dev →</a></li>
      </ul>
    </Navigation>
  )
}

export default Menu