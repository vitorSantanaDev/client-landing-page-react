import React from 'react'

import { mockBase } from '../Base/mock'
import Base from '../Base'

import * as S from './styles'

const Home: React.FC = () => {
  return (
    <S.Wrapper>
      <Base {...mockBase} />
    </S.Wrapper>
  )
}

export default Home
