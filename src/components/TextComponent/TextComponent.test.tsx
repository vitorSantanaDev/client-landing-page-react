import React from 'react'
import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/theme/render-theme'
import TextComponent from '.'

describe('<TextComponent />', () => {
  it('should render text', () => {
    renderTheme(<TextComponent>Text</TextComponent>)
    expect(screen.getByText('Text')).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>Text</TextComponent>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
