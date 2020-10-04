import React from 'react'
import { Title } from '../shared/styled'

import { Container, FaqLista } from './styles'

const Faq: React.FC = () => {
  return (
    <Container id="faq" data-scroll>
      <Title>FAQ</Title>
      <FaqLista>
        <dt>Qual a idade dos animais?</dt>
        <dd>As raposas são animais mamíferos e onívoros pertencentes à família Canidae. São vulpídeos de porte médio, caracterizados por um focinho comprido e uma cauda longa e peluda.</dd>
        <dt>Eles são fantásticos?</dt>
        <dd>Também apresentam como particularidade suas pupilas ovais, semelhantes às pupilas verticais dos felídeos.</dd>
        <dt>Qual a diferença?</dt>
        <dd>As raposas são animais mamíferos e onívoros pertencentes à família Canidae. São vulpídeos de porte médio, caracterizados por um focinho comprido e uma cauda longa e peluda.</dd>
        <dt>Como proteger?</dt>
        <dd>Também apresentam como particularidade suas pupilas ovais, semelhantes às pupilas verticais dos felídeos.</dd>
      </FaqLista>
    </Container>
  )
}

export default Faq