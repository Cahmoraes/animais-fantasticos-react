import React from 'react'
import { Title } from '../shared/styled'

import MapaImage from '../../assets/img/mapa.png'

import { Container, Mapa, Dados } from './styles'

const Contato: React.FC = () => {
  return (
    <Container id="contato" data-scroll>
      <Title>Contato</Title>
      <Mapa>
        <img src={MapaImage} alt="" />
      </Mapa>
      <Dados>
        <li>contato@origamid.com</li>
        <li>+55 (21) 9999-9999</li>
        <li>Rua do Conde, nº 21</li>
        <li>Rio de Janeiro - RJ</li>
      </Dados>
    </Container>
  )
}

export default Contato