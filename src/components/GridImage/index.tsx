import React from 'react'
import Heading from '../Heading'
import SectionBackground from '../SectionBackground'
import TextComponent from '../TextComponent'
import * as S from './styles'

interface IGridImage {
  background?: boolean
  title: string
  description: string
  sectionId?: string
  grid: {
    image: {
      altText: string
      srcImage: string
    }
  }[]
}

const GridImage: React.FC<IGridImage> = ({
  title,
  background,
  description,
  grid,
  sectionId
}) => (
  <SectionBackground sectionId={sectionId} background={background}>
    <S.Wrapper>
      <Heading size="huge" uppercase colorDark={!background} as="h2">
        {title}
      </Heading>
      <TextComponent>{description}</TextComponent>
      <S.Grid>
        {grid.map((element, index) => {
          const key = `${element.image.altText}-${index}`
          return (
            <S.GridElement key={key}>
              <S.Image
                src={element.image.srcImage}
                alt={element.image.altText}
              />
            </S.GridElement>
          )
        })}
      </S.Grid>
    </S.Wrapper>
  </SectionBackground>
)

export default GridImage
