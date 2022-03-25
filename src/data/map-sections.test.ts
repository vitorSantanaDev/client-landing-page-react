import {
  mapImageGrid,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid
} from './map-sections'
import { mockSections } from './mocks'
import pagesFakeData from './dados.json'

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections()
    expect(data).toEqual([])
  })
  it('should render sections with correct data', () => {
    const data = mapSections(pagesFakeData[0].sections)
    expect(data[0].title).toBe('January brings us Firefox 85')
  })

  it('should render section with invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid'
      }
    ])
    const withNoComponent = mapSections([{}])
    expect(withNoTextOrImageGrid).toEqual([
      { __component: 'section.section-grid' }
    ])
    expect(withNoComponent).toEqual([{}])
  })
  it('should map section two columns with no data', () => {
    const data = mapSectionTwoColumns()

    expect(data.background).toBeFalsy()
    expect(data.component).toBe('')
    expect(data.title).toBe('')
    expect(data.text).toBe('')
    expect(data.sectionId).toBe('')
    expect(data.srcImage).toBe('')
  })
  it('should map section two columns', () => {
    const data = mapSectionTwoColumns(mockSections.sectionTwoColumns)

    expect(data.background).toBeTruthy()
    expect(data.component).toBe('section.section-two-columns')
    expect(data.title).toBe('January brings us Firefox 85')
    expect(data.text).toBe(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    )
    expect(data.sectionId).toBe('home')
    expect(data.srcImage).toBe('dc.svg')
  })

  it('should map section content withno data', () => {
    const data = mapSectionContent()
    expect(data.background).toBeFalsy()
    expect(data.component).toBe('')
    expect(data.title).toBe('')
    expect(data.content).toBe('')
    expect(data.sectionId).toBe('')
  })
  it('should map section content', () => {
    const data = mapSectionContent(mockSections.sectionContent)
    expect(data.background).toBeFalsy()
    expect(data.component).toBe('section.section-content')
    expect(data.title).toBe('news coverage and some surprises')
    expect(data.content).toBe('The release of Apple Silicon-based Macs.')
    expect(data.sectionId).toBe('intro')
  })
  it('should map section grid text with data', () => {
    const data = mapTextGrid(mockSections.sectionGridText)
    expect(data.background).toBeTruthy()
    expect(data.component).toBe('section.section-grid')
    expect(data.title).toBe('My grid')
    expect(data.description).toBe(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lectus iaculis, congue neque sit amet, rhoncus risus.'
    )
    expect(data.sectionId).toBe('grid-one')
    expect(data.grid[0].title).toBe('Teste 1')
    expect(data.grid[0].description).toBe(
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias.'
    )
  })
  it('should map section grid text without data', () => {
    const data = mapTextGrid(undefined)
    expect(data.background).toBeFalsy()
    expect(data.component).toBe('')
    expect(data.title).toBe('')
    expect(data.description).toBe('')
    expect(data.sectionId).toBe('')
    expect(data.grid[0]).toBe(undefined)
  })
  it('should map section grid image without data', () => {
    const data = mapImageGrid(undefined)
    expect(data.background).toBeFalsy()
    expect(data.component).toBe('')
    expect(data.title).toBe('')
    expect(data.description).toBe('')
    expect(data.sectionId).toBe('')
    expect(data.grid[0]).toBeUndefined()
  })
  it('should map section grid image with data', () => {
    const data = mapImageGrid(mockSections.sectionGridImage)
    expect(data.background).toBeTruthy()
    expect(data.component).toBe('section.section-grid')
    expect(data.title).toBe('Gallery')
    expect(data.description).toBe(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lectus iaculis, congue neque sit amet, rhoncus risus.'
    )
    expect(data.sectionId).toBe('grid-one')
    expect(data.grid[0].image.alternativeText).toBe(
      'Foto de uma câmera fotográfica da sony'
    )
    expect(data.grid[0].image.url).toBe(
      'https://res.cloudinary.com/vsantana/image/upload/v1647392307/thumbnail_photo_1516035069371_29a1b244cc32_ixlib_rb_1_2_7a0b6e3d63.jpg'
    )
    expect(data.grid[0].image.caption).toBe(
      'Foto de uma câmera fotográfica da sony'
    )
  })
})
