import { mapMenu } from './map-menu'
import { mapSections } from './map-sections'

export interface IPagesData {
  footerContent?: string
  slug?: string
  title?: string
  menu?: { a: string }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sections?: Array<any>
}

export const mapData = (pagesData: IPagesData[] = [{}]) => {
  return pagesData.map((data) => {
    const {
      footerContent = '',
      slug = '',
      title = '',
      sections = [],
      menu = {}
    } = data
    return {
      footerContent,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu)
    }
  })
}
