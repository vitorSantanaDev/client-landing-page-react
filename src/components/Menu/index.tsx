import React, { useEffect, useState } from 'react'

import LogoLink from '../LogoLink'
import NavLinks from '../NavLinks'
import SectionContainer from '../SectionContainer'
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import * as S from './styles'

interface IMenuProps {
  links?: {
    children: React.ReactNode
    link: string
    newTab: boolean
  }[]
  logoData: {
    text: string
    srcImage?: string
    link: string
  }
}

const Menu: React.FC<IMenuProps> = ({ links = [], logoData }) => {
  const [menuVisible, setMenuVisible] = useState(false)
  const handleWindowResize = () => {
    setMenuVisible(false)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [menuVisible])

  return (
    <>
      <S.Button
        aria-label="Open/Close menu"
        onClick={() => setMenuVisible((s) => !s)}
      >
        {!menuVisible ? (
          <MenuIcon aria-label="Open menu" />
        ) : (
          <CloseIcon aria-label="Close menu" />
        )}
      </S.Button>
      <S.Wrapper onClick={() => setMenuVisible(false)} visible={menuVisible}>
        <SectionContainer>
          <S.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </S.MenuContainer>
        </SectionContainer>
      </S.Wrapper>
    </>
  )
}

export default Menu
