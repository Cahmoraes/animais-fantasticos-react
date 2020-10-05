import React, { useState, useEffect } from 'react'

import { Title } from '../shared/styled'
import MapaImage from '../../assets/img/mapa.png'

import { Container, Mapa, Dados, Preco } from './styles'
import IBitcoins from '../../interfaces/IBitcoins'
import api from '../../api'

const Contato: React.FC = () => {
  const [dadosBitcoin, setDadosBiticoin] = useState<IBitcoins>({ BRL: { buy: 0, sell: 0 } } as IBitcoins)

  useEffect(() => {
    async function getDadosBitcoins() {
      try {
        const response = await api.get<IBitcoins>('ticker')
        setDadosBiticoin(response.data as IBitcoins)
      } catch (erro) {
        console.log(erro)
      }
    }
    getDadosBitcoins()
  }, [])

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
        <li>Doe bitcoin <Preco>{dadosBitcoin?.BRL?.sell && (100 / dadosBitcoin.BRL.sell).toFixed(4)}</Preco> para nos ajudar</li>
        <li>Rio de Janeiro - RJ</li>
      </Dados>
    </Container>
  )
}

export default Contato