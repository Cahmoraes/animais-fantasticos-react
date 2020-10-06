import styled from 'styled-components'
import { showUp } from '../../styles/keyframes'

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
    cursor: pointer;
  }

  @media (max-width: 700px) {
    & {
      grid-column: 1;
    }
    
    & {
      margin-top: 0px;
    }

    & ul {
      justify-content: space-between;
    }

    & li a {
      padding: 15px 5px;
      font-size: 1.2rem;
      margin-right: 0;
    }
  }
`

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 38px;
  background: #E54;
  border: 2px solid #333;
  z-index: 200;
  animation: ${showUp} .3s forwards;
  
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -10px;
    width: 0;
    height: 0;
    border-bottom: 10px solid #E54;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }

  & li a:hover {
    color: #FFF;
  }
`