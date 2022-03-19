import React from 'react'
import * as S from './styles'

interface ITextComponentProps {
  children: string
}

const TextComponent: React.FC<ITextComponentProps> = ({ children }) => (
  <S.Wrapper dangerouslySetInnerHTML={{ __html: children }} />
)

export default TextComponent
