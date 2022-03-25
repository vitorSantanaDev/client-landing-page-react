import React from 'react'
import { renderTheme } from '../../styles/theme/render-theme'
import Base from '.'
import { mockBase } from './mock'

describe('<Base />', () => {
  it('should render componets in template Base', () => {
    const { container } = renderTheme(<Base {...mockBase} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
