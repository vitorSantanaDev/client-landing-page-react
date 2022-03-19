import React from 'react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderTheme } from '../../styles/theme/render-theme'

import Menu from '.'
import linksMock from '../NavLinks/mock'
import { theme } from '../../styles/theme/theme'

const logoData = {
  text: 'Logo',
  link: '#target',
  srcImage: 'images/logo.svg'
}
describe('<Menu />', () => {
  it('should render Logo and Main menu nav', () => {
    const { container } = renderTheme(
      <Menu logoData={logoData} links={linksMock} />
    )
    const heading = screen.getByRole('heading', { name: 'Logo' })
    const nav = screen.getByRole('navigation', { name: 'Main menu' })

    expect(heading).toBeInTheDocument()
    expect(nav).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render menu mobile and button for open and close the menu', () => {
    renderTheme(<Menu logoData={logoData} links={linksMock} />)
    const button = screen.getByLabelText('Open/Close menu')
    const menuContainer = button.nextSibling

    expect(button).toHaveStyleRule('display', 'none')
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium
    })

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium
    })
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()

    userEvent.click(button)
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium
    })
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()

    userEvent.click(button)
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium
    })
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('should not render links', () => {
    const { container } = renderTheme(<Menu logoData={logoData} links={[]} />)
    const nav = screen.queryByRole('navigation', {
      name: 'Main menu'
    })?.firstChild

    expect(nav).not.toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
