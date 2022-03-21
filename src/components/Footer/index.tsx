import React from 'react'
import SectionContainer from '../SectionContainer'
import TextComponent from '../TextComponent'
import * as S from './styles'

interface IFooter {
  html: string
}

const Footer: React.FC<IFooter> = ({ html }) => (
  <S.Wrapper>
    <SectionContainer>
      <TextComponent>{html}</TextComponent>
    </SectionContainer>
  </S.Wrapper>
)

export default Footer
