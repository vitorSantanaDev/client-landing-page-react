import styled, { css, DefaultTheme } from 'styled-components'

interface IWrapperProps {
  background?: boolean
}

const containerBackgroundActivate = (theme: DefaultTheme) => css`
  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`

export const Wrapper = styled.div<IWrapperProps>`
  ${({ theme, background }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    min-height: 100vh;

    display: flex;
    align-items: center;

    ${background && containerBackgroundActivate(theme)};
  `}
`
