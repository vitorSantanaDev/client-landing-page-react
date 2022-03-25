import { IPagesData } from './map-data'

export const mockSections = {
  sectionTwoColumns: {
    __component: 'section.section-two-columns',
    title: 'January brings us Firefox 85',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    metadata: {
      background: true,
      section_id: 'home'
    },
    image: {
      url: 'dc.svg'
    }
  },

  sectionContent: {
    __component: 'section.section-content',
    title: 'news coverage and some surprises',
    content: 'The release of Apple Silicon-based Macs.',
    metadata: {
      background: false,
      section_id: 'intro'
    }
  },
  sectionGridText: {
    __component: 'section.section-grid',
    title: 'My grid',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lectus iaculis, congue neque sit amet, rhoncus risus.',
    text_grid: [
      {
        title: 'Teste 1',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias.'
      },
      {
        title: 'Teste 2',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias.'
      },
      {
        title: 'Teste 3',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias.'
      }
    ],
    image_grid: [],
    metadata: {
      background: true,
      section_id: 'grid-one'
    }
  },
  sectionGridImage: {
    __component: 'section.section-grid',
    title: 'Gallery',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lectus iaculis, congue neque sit amet, rhoncus risus.',
    text_grid: [],
    image_grid: [
      {
        image: {
          alternativeText: 'Foto de uma câmera fotográfica da sony',
          url: 'https://res.cloudinary.com/vsantana/image/upload/v1647392307/thumbnail_photo_1516035069371_29a1b244cc32_ixlib_rb_1_2_7a0b6e3d63.jpg',
          caption: 'Foto de uma câmera fotográfica da sony'
        }
      },
      {
        image: {
          alternativeText:
            'Foto de uma avenida cheia de carros, em um fim de tarde.',
          caption: 'Foto de uma avenida cheia de carros, em um fim de tarde.',
          url: 'https://res.cloudinary.com/vsantana/image/upload/v1647392313/photo_1519501025264_65ba15a82390_ixlib_rb_1_2_66d85b6371.jpg'
        }
      }
    ],
    metadata: {
      background: true,
      section_id: 'grid-one'
    }
  }
}
export const mockMenuData = {
  open_in_new_tab: false,
  logo_text: 'Landing page',
  logo_link: '#home',
  menu: [
    {
      open_in_new_tab: false,
      link_text: 'Intro',
      url: '#intro'
    },
    {
      open_in_new_tab: false,
      link_text: 'Grid-one',
      url: '#grid-one'
    },
    {}
  ],
  logo: {
    url: 'e.svg'
  }
}

export const mockParameter: IPagesData[] = [
  {
    footerContent: '<h1>Heading</h1>',
    slug: 'This is slug of the page',
    title: 'This is the title of the page',
    menu: { a: 'a' },
    sections: [1, 2, 3, 4]
  }
]
