import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding-top: 5.4rem;

    @media ${theme.media.lteMedium} {
      padding-top: 0;
    }
  `}
`
