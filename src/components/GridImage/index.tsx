import React from 'react'
import Heading from '../Heading'
import SectionBackground from '../SectionBackground'
import TextComponent from '../TextComponent'
import * as S from './styles'

interface IGridImage {
  background?: boolean
  title: string
  description: string
  grid: {
    altText: string
    srcImage: string
  }[]
}

const GridImage: React.FC<IGridImage> = ({
  title,
  background,
  description,
  grid
}) => (
  <SectionBackground background={background}>
    <S.Wrapper>
      <Heading size="huge" uppercase colorDark={!background} as="h2">
        {title}
      </Heading>
      <TextComponent>{description}</TextComponent>
      <S.Grid>
        {grid.map((element) => (
          <S.GridElement key={element.srcImage}>
            <S.Image src={element.srcImage} alt={element.altText} />
          </S.GridElement>
        ))}
      </S.Grid>
    </S.Wrapper>
  </SectionBackground>
)

export default GridImage
