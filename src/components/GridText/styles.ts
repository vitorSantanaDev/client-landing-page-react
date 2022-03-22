import styled, { css } from 'styled-components'
import { Wrapper as Heading } from '../Heading/styles'
import { Wrapper as TextComponent } from '../TextComponent/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}
`
export const Grid = styled.div`
  ${({ theme }) => css`
    width: 100%;
    overflow: hidden;
    display: grid;
    counter-reset: grid-counter;
    gap: ${theme.spacings.large};
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  `}
`
export const GridElement = styled.div`
  ${() => css`
    ${Heading} {
      left: 5rem;
      position: relative;
    }

    ${Heading}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);

      top: -2.3rem;
      left: -5rem;
      position: absolute;
      transform: rotate(10deg);

      font-size: 7rem;
    }
  `}
`
