import React from 'react'

import MenuLink from '../MenuLink'
import * as S from './styles'

interface INavLinks {
  links: {
    children: React.ReactNode
    link: string
    newTab: boolean
  }[]
}

const NavLinks: React.FC<INavLinks> = ({ links }) => (
  <S.Wrapper aria-label="Main menu">
    {links?.map((link) => (
      <MenuLink key={link.link} {...link} />
    ))}
  </S.Wrapper>
)

export default NavLinks
