import styled, { css } from 'styled-components'
import { Wrapper as Heading } from '../Heading/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    align-items: center;
    gap: ${theme.spacings.large};
    grid-template-columns: 1fr 2fr;

    @media ${theme.media.lteMedium} {
      text-align: center;
      grid-template-columns: 1fr;
    }
    ${Heading} {
      margin-bottom: ${theme.spacings.xlarge};
    }
  `}
`
export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`
export const ImageContainer = styled.div`
  ${() => css``}
`
export const Image = styled.img`
  ${() => css``}
`
