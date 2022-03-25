import { mapData } from './map-data'
import { mockParameter } from './mocks'
describe('map-data', () => {
  it('should map data even if there is no data', () => {
    const pagesData = mapData()[0]
    expect(pagesData.footerContent).toBe('')
    expect(pagesData.slug).toBe('')
    expect(pagesData.title).toBe('')
    expect(pagesData.sections).toEqual([])
    expect(pagesData.menu).toEqual({
      link: '',
      links: [],
      newTab: false,
      srcImage: '',
      text: ''
    })
  })
  it('should map data if there are data', () => {
    const pagesData = mapData(mockParameter)[0]
    expect(pagesData.footerContent).toBe('<h1>Heading</h1>')
    expect(pagesData.slug).toBe('This is slug of the page')
    expect(pagesData.title).toBe('This is the title of the page')
  })
})
