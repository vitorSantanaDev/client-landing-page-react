const GET_LANDING_PAGE = /* GraphQL */ `
  fragment imageData on UploadFile {
    altText: alternativeText
    srcImage: url
  }

  fragment sectionGridText on ComponentSectionSectionGrid {
    title
    description
    text_grid {
      component: __typename
      title
      description
    }
    metadata {
      background
    }
  }

  fragment sectionImageGrid on ComponentSectionSectionGrid {
    title
    description
    images: image_grid {
      component: __typename
      image {
        ...imageData
      }
    }
    metadata {
      background
    }
  }

  fragment sectionContent on ComponentSectionSectionContent {
    component: __typename
    title
    content
    metadata {
      background
    }
  }

  fragment sectionTwoColumns on ComponentSectionSectionTwoColumns {
    component: __typename
    title
    description
    image {
      ...imageData
    }
    metadata {
      background
    }
  }

  query GET_LANDING_PAGE($id: ID!) {
    page(id: $id) {
      title
      slug
      menu {
        logo {
          ...imageData
        }
        link: logo_link
        links: menu {
          children: link_text
          link: url
          newTab: open_in_new_tab
        }
      }
      sections {
        ...sectionTwoColumns
        ...sectionContent
        ...sectionGridText
        ...sectionImageGrid
      }
      footer
    }
  }
`
export default GET_LANDING_PAGE
