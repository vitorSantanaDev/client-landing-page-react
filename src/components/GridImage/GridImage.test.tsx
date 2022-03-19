import React from 'react'
import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/theme/render-theme'

import GridImage from '.'
import mock from './mock'

describe('<GridImage />', () => {
  it('should render images', () => {
    const { container } = renderTheme(<GridImage {...mock} />)
    const images = screen.getAllByRole('img', { name: /teste/i })

    expect(images).toHaveLength(6)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should not render images when grid prop is empty', () => {
    const { container } = renderTheme(
      <GridImage title={mock.title} description="test" grid={[]} />
    )
    const images = screen.queryAllByRole('img', { name: /teste/i })

    expect(images).toHaveLength(0)
    expect(container.firstChild).toMatchSnapshot()
  })
})
