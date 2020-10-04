import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }

  img {
    display: block;
    max-width: 100%;
  }
  
  ul {
    list-style: none;
  }
  
  #root {
    background: #faf6ed;
    color: #222;
    -webkit-font-smoothing: antialiased;
    display: grid;
    grid-template-columns: 1fr 120px minmax(300px, 800px) 1fr;
  }

  @media (max-width: 700px) {
    #root {
      grid-template-columns: 1fr;
    }
  }
`

export default GlobalStyles