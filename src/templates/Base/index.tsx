import React from 'react'

import Footer from '../../components/Footer'
import GoTop from '../../components/GoTop'
import Menu from '../../components/Menu'
import * as S from './styles'

interface IBaseProps {
  children: string | React.ReactNode
  links?: {
    children: React.ReactNode
    link: string
    newTab: boolean
  }[]
  logoData: {
    text: string
    srcImage?: string
    link: string
  }
  footerHtml: string
}

const Base: React.FC<IBaseProps> = ({
  links,
  logoData,
  footerHtml,
  children
}) => (
  <>
    <Menu links={links} logoData={logoData} />
    <S.Wrapper>
      {children}
      <Footer html={footerHtml} />
    </S.Wrapper>
    <GoTop />
  </>
)

export default Base
