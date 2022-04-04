/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'

import client from '../../graphql/client'
import GET_LANDING_PAGE from '../../graphql/queries/getLandingPage'

import Base from '../Base'
import GridContent from '../../components/GridContent'
import GridTwoColumn from '../../components/GridTwoColumn'
import Loading from '../../components/Loading'
import PageNotFound from '../PageNotFound'
import * as S from './styles'
import GridText from '../../components/GridText'
import GridImage from '../../components/GridImage'

const Home: React.FC = () => {
  const [data, setData] = useState<null | any>(null)

  useEffect(() => {
    ;(async () => {
      const variables = {
        id: '62312e8bc1927438ed4646ea'
      }
      const { page } = await client.request(GET_LANDING_PAGE, variables)
      setData(page)
    })()
  }, [])

  if (data === undefined) {
    return <PageNotFound />
  }

  if (!data || !data.slug) {
    return <Loading />
  }

  const { menu, sections, footer, slug } = data
  const { links, link: logoLink, logo } = menu

  return (
    <S.Wrapper>
      <Base links={links} footerHtml={footer} logoData={{ logoLink, ...logo }}>
        {sections.map((section: any, index: number) => {
          const { component } = section
          const { text_grid } = section
          const { images } = section
          const key = `${slug}-${index}`

          if (
            component !== undefined &&
            component === 'ComponentSectionSectionTwoColumns'
          ) {
            return (
              <GridTwoColumn
                key={key}
                sectionId={section.metadata.section_id}
                text={section.description}
                srcImage={section.image.srcImage}
                title={section.title}
                background={section.metadata.background}
              />
            )
          }
          if (
            component !== undefined &&
            component === 'ComponentSectionSectionContent'
          ) {
            return (
              <GridContent
                key={key}
                sectionId={section.metadata.section_id}
                title={section.title}
                content={section.content}
              />
            )
          }
          if (text_grid !== undefined && text_grid.length > 0) {
            return (
              <GridText
                key={key}
                sectionId={section.metadata.section_id}
                background={section.metadata.background}
                title={section.title}
                description={section.description}
                grid={text_grid}
              />
            )
          }
          if (images !== undefined && images.length > 0) {
            return (
              <GridImage
                key={key}
                sectionId={section.metadata.section_id}
                background={section.metadata.background}
                title={section.title}
                description={section.description}
                grid={images}
              />
            )
          }
        })}
      </Base>
    </S.Wrapper>
  )
}

export default Home
