import React from 'react'

import SectionContainer from '../SectionContainer'
import * as S from './styles'

interface ISectionBackgroundProps {
  children: React.ReactNode
  background?: boolean
  sectionId?: string
}

const SectionBackground: React.FC<ISectionBackgroundProps> = ({
  children,
  background,
  sectionId
}) => {
  const id = sectionId ? sectionId : ''
  return (
    <S.Wrapper id={id} background={background}>
      <SectionContainer>{children}</SectionContainer>
    </S.Wrapper>
  )
}

export default SectionBackground
