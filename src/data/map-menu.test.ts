import { mapMenu, mapMenuLinks } from './map-menu'
import { mockMenuData } from './mocks'
describe('map-menu', () => {
  it('should return a predefined object if no data', () => {
    const menu = mapMenu()
    expect(menu.newTab).toBeFalsy()
    expect(menu.text).toBe('')
    expect(menu.srcImage).toBe('')
    expect(menu.link).toBe('')
  })
  it('should map menu to match keys and values required', () => {
    const menu = mapMenu(mockMenuData)
    expect(menu.newTab).toBeFalsy()
    expect(menu.text).toBe('Landing page')
    expect(menu.srcImage).toBe('e.svg')
    expect(menu.link).toBe('#home')
    expect(menu.links[0].newTab).toBeFalsy()
    expect(menu.links[0].children).toBe('Intro')
    expect(menu.links[0].link).toBe('#intro')
  })

  it('should return an empyt array if no links', () => {
    const links = mapMenuLinks()
    expect(links).toEqual([])
  })
  it('should map links if links passed', () => {
    const links = mapMenuLinks(mockMenuData.menu)
    expect(links[0].newTab).toBeFalsy()
    expect(links[0].children).toBe('Intro')
    expect(links[0].link).toBe('#intro')
  })
})
