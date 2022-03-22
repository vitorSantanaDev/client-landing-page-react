import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  ${({ theme }) => css`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 6;
    opacity: 0.7;

    color: ${theme.colors.white};
    background-color: ${theme.colors.primaryColor};
  `}
`
