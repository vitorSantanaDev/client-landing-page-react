import React from 'react'
import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/theme/render-theme'
import GoTop from '.'

describe('<GoTop />', () => {
  it('should render a go to top', () => {
    renderTheme(<GoTop />)
    const link = screen.getByRole('link', { name: /go to top/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#')
  })

  it('should match snapshot', () => {
    const { container } = renderTheme(<GoTop />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
