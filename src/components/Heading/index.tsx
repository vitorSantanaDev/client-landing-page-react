import React from 'react'

import * as S from './styles'

interface IHeadingProps {
  children: React.ReactNode
  colorDark?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'small' | 'medium' | 'big' | 'huge'
  uppercase?: boolean
}

const Heading: React.FC<IHeadingProps> = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'huge',
  uppercase = false
}) => {
  return (
    <S.Wrapper colorDark={colorDark} as={as} size={size} uppercase={uppercase}>
      {children}
    </S.Wrapper>
  )
}

export default Heading
