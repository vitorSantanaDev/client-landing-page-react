import React from 'react'

import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp'
import * as S from './styles'

const GoTop: React.FC = () => (
  <S.Wrapper aria-label="Go to top" href="#" title="Go to top">
    <KeyboardArrowUp />
  </S.Wrapper>
)

export default GoTop
