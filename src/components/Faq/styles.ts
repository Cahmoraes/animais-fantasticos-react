import styled from 'styled-components'
import { animaFaq } from '../../styles/keyframes'

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
  transition: .3s ease-out;

  &.active {
    opacity: initial;
    transform: initial;
  }

  @media (max-width: 700px) {
    & {
      grid-column: 1;
      grid-template-columns: 100px 1fr;
      grid-gap: 10px;
    }
  }
`

export const FaqLista = styled.dl`
  grid-column: 2 / 4;

 dt {
    font-family: 'IBM Plex Mono', monospace;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: .5rem;
    color: #E54;
    cursor: pointer;
    &::after {
      content: '⬎';
      margin-left: 5px;
    }
    &.active::after {
      content: '⬏';
    }
  }

  dt::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 10px;
    margin-right: 10px;
    background: #FB5;
  }

  dd {
    font-family: Helvetica, Arial;
    margin-bottom: .5rem;
    margin-left: 30px;
    display: none;
    &.active {
      display: block;
      animation: ${animaFaq} .5s forwards;
    }
  }

  @media (max-width: 700px) {
    & {
      grid-column: 1 / 3;
    }
  }
`