import styled, { css } from 'styled-components'
import { Wrapper as SectionContainer } from '../SectionContainer/styles'
import { Wrapper as Heading } from '../Heading/styles'

interface IWrapper {
  visible: boolean
}

const menuVisible = () => css`
  opacity: 1;
  visibility: visible;
`

export const Wrapper = styled.div<IWrapper>`
  ${({ theme, visible }) => css`
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 5;
    transition: all 300ms ease-in-out;
    border-bottom: ${theme.colors.mediumGray};
    background-color: ${theme.colors.white};

    > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.lteMedium} {
      opacity: 0;
      height: 100vh;
      visibility: hidden;

      ${visible && menuVisible()}

      > ${SectionContainer} {
        margin: 0;
        height: 100vh;
        overflow-y: auto;

        display: grid;
        align-items: center;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
      }

      & ${Heading} {
        padding-bottom: ${theme.spacings.large};

        display: flex;
        justify-content: center;
      }
    }
  `}
`

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge} 0;
    }
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    z-index: 6;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    position: fixed;
    cursor: pointer;
    display: none;

    border: none;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primaryColor};

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }

    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`
