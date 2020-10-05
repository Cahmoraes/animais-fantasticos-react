import styled from 'styled-components'

export const Container = styled.footer`
  grid-column: 3/5;
  margin-bottom: 2rem;
  background: #FB5;

  p {
    padding: 20px;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: bold;
  }

  @media (max-width: 700px) {
    & {
      grid-column: 1;
      grid-template-columns: 100px 1fr;
      grid-gap: 10px;
    }
  }
`