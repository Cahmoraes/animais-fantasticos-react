import styled from 'styled-components'

export const Navigation = styled.nav`
  & {
    grid-column: 3 / 5;
    margin-top: 2rem;
    margin-bottom: 2rem;
    background: #FB5;
  }
  
  & ul {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
  }
  
  & li a {
    display: block;
    padding: 15px 10px;
    margin-right: 10px;
    color: #222;
    text-decoration: none;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.4rem;
    letter-spacing: .1em;
  }

  @media (max-width: 700px) {
    & {
      grid-column: 1;
    }
    & {
      margin-top: 0px;
    }
  }
`