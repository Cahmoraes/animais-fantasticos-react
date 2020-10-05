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
      grid-template-columns: 100px 1fr;
      grid-gap: 10px;
    }
  }
`

export const NumerosGrid = styled.div`
  grid-column: 2 / 4;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  align-items: center;

  @media (max-width: 700px) {
    & {
      grid-column: 1;
    }
  }

  & h3 {
    font-family: 'Playfair Display SC';
    font-size: 3.2rem;
    margin-bottom: .5rem;
  }
  
  & span {
    font-family: 'IBM Plex Mono', monospace;
    font-weight: bold;
    font-size: 2.4rem;
    color: #E54;
  }
`