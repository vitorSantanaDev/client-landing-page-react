import React from 'react'
import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/theme/render-theme'

import GridText from '.'
import mock from './mock'

describe('<GridText />', () => {
  it('should render the component GridText', () => {
    const { container } = renderTheme(<GridText {...mock} />)
    const headings = screen.getAllByRole('heading', { name: /teste/i })

    expect(headings).toHaveLength(3)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should not render the headings when grid prop is empyt', () => {
    const { container } = renderTheme(
      <GridText title="My grid" description="test" grid={[]} />
    )
    const headings = screen.queryAllByRole('heading', { name: /teste/i })

    expect(headings).toHaveLength(0)
    expect(container.firstChild).toMatchSnapshot()
  })
})
