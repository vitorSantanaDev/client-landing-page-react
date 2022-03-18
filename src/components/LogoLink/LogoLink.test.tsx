import React from 'react'
import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/theme/render-theme'
import LogoLink from '.'

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="My link" />)
    const heading = screen.getByRole('heading', { name: /my link/i })

    expect(heading).toBeInTheDocument()
    expect(heading.firstChild).toHaveAttribute('href', '#target')
  })
  it('should render text logo', () => {
    renderTheme(
      <LogoLink link="#target" text="My link" srcImage="images/image.png" />
    )
    const image = screen.getByRole('img', { name: /my link/i })

    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'images/image.png')
  })

  it('should macth snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="My link" srcImage="images/image.png" />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
