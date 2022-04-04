import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  ${() => css`
    display: flex;
    align-items: center;

    color: inherit;
    text-decoration: none;

    > img {
      height: 2.5rem;
    }
  `}
`
