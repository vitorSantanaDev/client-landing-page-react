import styled, { css, DefaultTheme } from 'styled-components'

interface IWrapperProps {
  colorDark: boolean
  uppercase: boolean
  size: 'small' | 'medium' | 'big' | 'huge'
}

const mediaFont = (theme: DefaultTheme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`

const titleSize = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)};
  `
}

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`

export const Wrapper = styled.h1<IWrapperProps>`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${!colorDark ? theme.colors.white : theme.colors.primaryColor};
    ${titleSize[size](theme)}
    ${titleCase(uppercase)}
  `}
`
