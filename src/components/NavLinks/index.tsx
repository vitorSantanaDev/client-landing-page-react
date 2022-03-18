import React from 'react'
import * as S from './styles'

import MenuLink from '../MenuLink'

interface INavLinks {
  links: {
    children: React.ReactNode
    link: string
    newTab: boolean
  }[]
}

const NavLinks: React.FC<INavLinks> = ({ links }) => (
  <S.Wrapper>
    {links?.map((link) => (
      <MenuLink key={link.link} {...link} />
    ))}
  </S.Wrapper>
)

export default NavLinks
