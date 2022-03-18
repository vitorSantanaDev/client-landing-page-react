import React from 'react'
import * as S from './styles'

interface MenuLinkProps {
  link: string
  newTab?: boolean
}

const MenuLink: React.FC<MenuLinkProps> = ({
  children,
  link,
  newTab = false
}) => {
  const target = newTab ? '_blank' : '_self'
  return (
    <S.Wrapper href={link} target={target}>
      {children}
    </S.Wrapper>
  )
}

export default MenuLink
