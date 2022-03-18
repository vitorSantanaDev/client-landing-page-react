import React from 'react'
import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/theme/render-theme'
import MenuLink from '.'

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="https://google.com">My Link</MenuLink>)
    expect(screen.getByRole('link', { name: /my link/i })).toHaveAttribute(
      'target',
      '_self'
    )
  })
  it('should render open in a new tab', () => {
    renderTheme(
      <MenuLink link="https://google.com" newTab>
        My Link
      </MenuLink>
    )
    expect(screen.getByRole('link', { name: /my link/i })).toHaveAttribute(
      'target',
      '_blank'
    )
  })

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <MenuLink link="https://google.com" newTab>
        My Link
      </MenuLink>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
