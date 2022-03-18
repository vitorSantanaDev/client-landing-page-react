import React from 'react'
import Heading from '../Heading'
import * as S from './styles'

interface ILogoLinkProps {
  text: string
  srcImage?: string
  link: string
}

const LogoLink: React.FC<ILogoLinkProps> = ({ text, srcImage, link }) => {
  return (
    <Heading size="small" uppercase>
      <S.Wrapper href={link}>
        {srcImage ? <img src={srcImage} alt={text} /> : text}
      </S.Wrapper>
    </Heading>
  )
}

export default LogoLink
