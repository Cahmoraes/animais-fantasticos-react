import { keyframes } from 'styled-components'

export const animaContent = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-30px, 0, 0);
  }
  to {
    opacity: initial;
    transform: initial;
  }
`