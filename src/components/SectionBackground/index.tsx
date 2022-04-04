import React from 'react'

import SectionContainer from '../SectionContainer'
import * as S from './styles'

interface ISectionBackgroundProps {
  children: React.ReactNode
  background?: boolean
  sectionId?: string
}

const randomId = () => `${Math.random() * 1000}`.replace(/[^a-z0-9-_]/gi, '-')

const SectionBackground: React.FC<ISectionBackgroundProps> = ({
  children,
  background,
  sectionId
}) => {
  const id = sectionId ? sectionId : randomId()
  return (
    <S.Wrapper id={id} background={background}>
      <SectionContainer>{children}</SectionContainer>
    </S.Wrapper>
  )
}

export default SectionBackground
