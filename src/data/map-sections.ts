/* eslint-disable @typescript-eslint/no-explicit-any */
interface Isection {
  __component?: string
  text_grid?: {
    title: string
    description: string
  }[]
  image_grid?: {
    image: {
      alternativeText: string
      url: string
      caption?: string
    }
  }[]
  title?: string
  content?: string
  description?: string
  metadata?:
    | {
        background?: boolean
        section_id?: string
      }
    | any
  image?:
    | {
        url: string
      }
    | any
}

export const mapSectionTwoColumns = (section: Isection = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: srcImage = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = false
  } = section
  return {
    component,
    title,
    text,
    srcImage,
    background,
    sectionId
  }
}
export const mapSectionContent = (section: Isection = {}) => {
  const {
    __component: component = '',
    title = '',
    content = '',
    metadata: { background = false, section_id: sectionId = '' } = false
  } = section
  return {
    component,
    title,
    content,
    background,
    sectionId
  }
}
export const mapTextGrid = (section: Isection = {}) => {
  const {
    __component: component = '',
    title = '',
    content: description = '',
    text_grid: grid = [],
    metadata: { background = false, section_id: sectionId = '' } = false
  } = section
  return {
    component,
    title,
    description,
    grid,
    background,
    sectionId
  }
}
export const mapImageGrid = (section: Isection = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    image_grid: grid = [],
    metadata: { background = false, section_id: sectionId = '' } = false
  } = section
  return {
    component,
    title,
    description,
    grid,
    background,
    sectionId
  }
}

export const mapSections = (sections: Isection[] = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section)
    }

    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section
      if (text_grid.length > 0) {
        return mapTextGrid(section)
      }
      if (image_grid.length > 0) {
        return mapImageGrid(section)
      }
    }

    if (section.__component === 'section.section-content') {
      return mapSectionContent(section)
    }
    return section
  })
}
