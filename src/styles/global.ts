import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    ${({ theme }) => css`
      font-size: ${theme.font.sizes.small};
      font-family: ${theme.font.family.default};
    `}
  }

  h1, h2, h3, h4 h5, h6 {
    margin: ${({ theme }) => theme.spacings.large} 0;
    font-family: ${({ theme }) => theme.font.family.secondary};
  }

  p {
    margin: ${({ theme }) => theme.spacings.large} 0;
  }

  ul, ol {
    list-style: none;
    margin: ${({ theme }) => theme.spacings.large};
    padding: ${({ theme }) => theme.spacings.large};
  }

  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
`
