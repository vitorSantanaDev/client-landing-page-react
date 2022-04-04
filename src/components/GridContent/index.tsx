import React from 'react'

import Heading from '../Heading'
import SectionBackground from '../SectionBackground'
import TextComponent from '../TextComponent'
import * as S from './styles'

interface IGridContent {
  title: string
  content: string
  background?: boolean
  sectionId?: string
}

const GridContent: React.FC<IGridContent> = ({
  title,
  content,
  background,
  sectionId
}) => (
  <SectionBackground sectionId={sectionId} background={background}>
    <S.Wrapper>
      <Heading uppercase colorDark={!background} as="h2">
        {title}
      </Heading>
      <S.Content>
        <TextComponent>{content}</TextComponent>
      </S.Content>
    </S.Wrapper>
  </SectionBackground>
)

export default GridContent
