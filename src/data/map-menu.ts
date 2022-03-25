/* eslint-disable @typescript-eslint/no-explicit-any */
interface Ilinks {
  open_in_new_tab?: boolean
  link_text?: string
  url?: string
}

interface Imenu {
  open_in_new_tab?: boolean
  logo_text?: string
  srcImage?: string
  logo_link?: string
  links?: Ilinks[]
  logo?: { url: string } | any
  menu?: Array<any>
}

export const mapMenuLinks = (links: Ilinks[] = []) => {
  return links.map((item) => {
    const {
      open_in_new_tab: newTab = false,
      link_text: children = '',
      url: link = ''
    } = item
    return {
      newTab,
      children,
      link
    }
  })
}

export const mapMenu = (menu: Imenu = {}) => {
  const {
    open_in_new_tab: newTab = false,
    logo_text: text = '',
    logo_link: link = '',
    logo: { url: srcImage = '' } = '',
    menu: links = []
  } = menu
  return {
    newTab,
    text,
    link,
    links: mapMenuLinks(links),
    srcImage
  }
}
