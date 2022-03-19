import React from 'react'
import { renderTheme } from '../../styles/theme/render-theme'

import GridText from '.'
import mock from './mock'

describe('<GridText />', () => {
  it('should render the component GridText', () => {
    const { container } = renderTheme(<GridText {...mock} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
