import React from 'react'
import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/theme/render-theme'
import Footer from '.'

describe('<Footer />', () => {
  it('should render footer', () => {
    renderTheme(<Footer html="<h2>Footer<h2>" />)
    const heading = screen.getByRole('heading', { name: /footer/i })
    expect(heading).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = renderTheme(<Footer html="<h2>Footer<h2>" />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
