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

export const animaFaq = keyframes`
  from {
    opacity: 0;
    min-height: auto;
  }
  to {
    opacity: 1;
    max-height: 200px;
  }
`

export const animaModal = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -30px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export const showUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 30px, 0);
  }
  to {
    opacity: initial;
    transform: initial;
  }
`