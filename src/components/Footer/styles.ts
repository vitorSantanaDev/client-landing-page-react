import styled, { css } from 'styled-components'
import { Wrapper as TextComponent } from '../../components/TextComponent/styles'
import { Wrapper as SectionContainer } from '../../components/SectionContainer/styles'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.1rem solid ${theme.colors.mediumGray};
    padding: ${theme.spacings.small};

    & ${TextComponent} {
      font-size: ${theme.font.sizes.small};
    }
    & ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
  `}
`
