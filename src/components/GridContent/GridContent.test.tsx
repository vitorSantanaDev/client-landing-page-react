import React from 'react'
import { renderTheme } from '../../styles/theme/render-theme'

import GridContent from '.'
import mock from './mock'

describe('<GridContent />', () => {
  it('should ', () => {
    const { container } = renderTheme(<GridContent {...mock} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
