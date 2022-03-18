import React from 'react'
import { screen } from '@testing-library/react'

import { renderTheme } from '../../styles/theme/render-theme'
import { theme } from '../../styles/theme/theme'

import NavLinks from '.'
import mock from './mock'
describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks links={mock} />)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(mock.length)
  })
  it('should render the nav in responsive format when the media query is triggered', () => {
    renderTheme(<NavLinks links={mock} />)
    const nav = screen.getByText(/First Link/).parentElement
    expect(nav).toHaveStyleRule('flex-flow', 'column wrap', {
      media: theme.media.lteMedium
    })
  })
  it('should not render links', () => {
    renderTheme(<NavLinks links={[]} />)
    const links = screen.queryAllByRole('link')
    expect(links).toHaveLength(0)
  })
  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={mock} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
