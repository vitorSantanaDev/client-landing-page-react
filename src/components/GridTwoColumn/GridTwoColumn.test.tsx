import React from 'react'
import { renderTheme } from '../../styles/theme/render-theme'

import GridTwoColumn from '.'
import mock from './mock'

describe('<GridTwoColumn />', () => {
  it('should render two column grid', () => {
    const { container } = renderTheme(<GridTwoColumn {...mock} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
