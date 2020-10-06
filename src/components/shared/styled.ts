import styled from 'styled-components'

export const Title = styled.h1`
  font-family: 'Playfair Display SC', georgia;
  font-size: 6.0rem;
  line-height: 1;
  font-weight: 400;
  margin-bottom: 1rem;
  grid-column: 1 / 4;

  @media (max-width: 700px) {
    & {
      font-size: 4.4rem;
    }
  }
`