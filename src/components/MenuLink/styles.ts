import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    position: relative;

    padding: ${theme.spacings.small};
    color: ${theme.colors.primaryColor};
    font-size: ${theme.font.sizes.small};

    &::after {
      content: '';
      width: 0%;
      height: 0.2rem;

      bottom: 0;
      left: 50%;
      position: absolute;

      transition: all 300ms ease-in-out;
      background-color: ${theme.colors.secondaryColor};
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`
