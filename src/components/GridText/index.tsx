import React from 'react'

import Heading from '../Heading'
import SectionBackground from '../SectionBackground'
import TextComponent from '../TextComponent'
import * as S from './styles'

interface IGridText {
  title: string
  background?: boolean
  description: string
  grid: {
    title: string
    description: string
  }[]
}

const GridText: React.FC<IGridText> = ({
  title,
  background,
  description,
  grid
}) => (
  <SectionBackground background={background}>
    <S.Wrapper>
      <Heading size="huge" uppercase colorDark={!background}>
        {title}
      </Heading>
      <TextComponent>{description}</TextComponent>
      <S.Grid>
        {grid.map((element) => (
          <S.GridElement key={element.title}>
            <Heading size="medium" colorDark={!background}>
              {element.title}
            </Heading>
            <TextComponent>{element.description}</TextComponent>
          </S.GridElement>
        ))}
      </S.Grid>
    </S.Wrapper>
  </SectionBackground>
)

export default GridText
