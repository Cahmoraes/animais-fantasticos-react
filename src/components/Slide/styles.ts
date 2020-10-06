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