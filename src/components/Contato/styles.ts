import styled from 'styled-components'

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

  @media (max-width: 700px) {
    & {
      grid-column: 1;
    }
  }
`

export const Mapa = styled.div`
  grid-column: 2;

  @media (max-width: 700px) {
    & {
      grid-column: 1 / 3;
    }
  }
`

export const Dados = styled.ul`
  grid-column: 3;

  & li {
    margin-bottom: 1rem;
    font-family: Helvetica, Arial;
  }

  & li::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 10px;
    margin-right: 10px;
    background: #FB5;
  }

  @media (max-width: 700px) {
    & {
      grid-column: 1 / 3;
    }
  }
`