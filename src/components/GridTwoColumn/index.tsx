import React from 'react'

import Heading from '../Heading'
import SectionBackground from '../SectionBackground'
import TextComponent from '../TextComponent'
import * as S from './styles'

interface IGridTwoColumnProps {
  title: string
  text: string
  srcImage: string
  background?: boolean
}

const GridTwoColumn: React.FC<IGridTwoColumnProps> = ({
  title,
  text,
  srcImage,
  background
}) => (
  <SectionBackground background={background}>
    <S.Wrapper>
      <S.TextContainer>
        <Heading uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{text}</TextComponent>
      </S.TextContainer>
      <S.ImageContainer>
        <S.Image src={srcImage} alt={title} />
      </S.ImageContainer>
    </S.Wrapper>
  </SectionBackground>
)

export default GridTwoColumn
