import styled from 'styled-components'
import { animaContent } from '../../styles/keyframes'

export const Container = styled.section`
  grid-column: 2 / 4;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  display: grid;
  grid-template-columns: 90px 300px 1fr;
  grid-gap: 20px;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translate3d(-30px, 0, 0);
  transition: .5s ease-out;

  &.active {
    opacity: initial;
    transform: initial;
  }

  & h2 {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 1.6rem;
    text-transform: uppercase;
    letter-spacing: .1em;
    margin-bottom: 1rem;
    color: #E54;
  }

  & h2::before {
    content: '';
    display: inline-block;
    width: 40px;
    height: 10px;
    margin-right: 10px;
    background: #FB5;
  }

  & p {
    font-family: Helvetica, Arial;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  @media (max-width: 700px) {
    & {
      grid-column: 1;
      grid-template-columns: 100px 1fr;
      grid-gap: 10px;
    }
  }
`

export const AnimaisLista = styled.ul`
  height: 370px;
  overflow-y: scroll;
  grid-column: 2;
  
  &::-webkit-scrollbar {
    width: 18px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #FB5;
    border-left: 4px solid #faf6ed;
    border-right: 4px solid #faf6ed;
  }
  
  &::-webkit-scrollbar-track {
    background: #faf6ed;
  }

  @media (max-width: 700px) {
    & {
      grid-column: 1;
    }
  }
`

export const AnimaisDescricao = styled.div`
  grid-column: 3;

  & section {
    margin-bottom: 3rem;
    display: none;
  }

  & section.active {
    display: block;
    animation: ${animaContent} .2s forwards;
  }
  
`