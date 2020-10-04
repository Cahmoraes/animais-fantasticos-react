import React from "react"

import { Navigation } from './styles'

const Menu: React.FC = ({ children }) => {
  return (
    <Navigation>
      <ul>
        <li><a href="#animais">Animais</a></li>
        <li><a href="#faq">Faq</a></li>
        <li><a href="#contato">Contato</a></li>
        <li><a href="https://www.origamid.com/">Dev →</a></li>
      </ul>
    </Navigation>
  )
}

export default Menu