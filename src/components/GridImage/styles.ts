import styled, { css } from 'styled-components'
import { Wrapper as TextComponent } from '../TextComponent/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    & > ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}
`
export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.large};
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  `}
`
export const GridElement = styled.div`
  ${() => css`
    overflow: hidden;
  `}
`
export const Image = styled.img`
  ${() => css`
    width: 100%;
    max-height: 447px;
    transition: all 300ms ease-in-out;

    &:hover {
      transform: scale(1.2) rotate(10deg);
    }
  `}
`
