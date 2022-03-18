import React from 'react'

import SectionContainer from '../SectionContainer'
import * as S from './styles'

interface ISectionBackgroundProps {
  children: React.ReactNode
  background?: boolean
}

const SectionBackground: React.FC<ISectionBackgroundProps> = ({
  children,
  background
}) => (
  <S.Wrapper background={background}>
    <SectionContainer>{children}</SectionContainer>
  </S.Wrapper>
)

export default SectionBackground
