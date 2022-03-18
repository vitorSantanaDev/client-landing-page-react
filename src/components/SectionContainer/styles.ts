import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 1200px;
    margin: 0 auto;
    padding: ${theme.spacings.large};
  `}
`
