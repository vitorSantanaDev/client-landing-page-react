import React from 'react'
import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/theme/render-theme'
import Heading from '.'
import { theme } from '../../styles/theme/theme'
import { ThemeProvider } from 'styled-components'

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>Text</Heading>)
    const heading = screen.getByRole('heading', { name: /text/i })

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none'
    })
  })
  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>Text</Heading>)
    const heading = screen.getByRole('heading', { name: /text/i })

    expect(heading).toHaveStyle({
      color: theme.colors.white
    })
  })
  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">Text</Heading>)
    const heading = screen.getByRole('heading', { name: /text/i })

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium
    })

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">Text</Heading>
      </ThemeProvider>
    )
    expect(screen.getByRole('heading', { name: /text/i })).toHaveStyle({
      'font-size': theme.font.sizes.xlarge
    })

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">Text</Heading>
      </ThemeProvider>
    )
    expect(screen.getByRole('heading', { name: /text/i })).toHaveStyle({
      'font-size': theme.font.sizes.large
    })

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">Text</Heading>
      </ThemeProvider>
    )
    expect(screen.getByRole('heading', { name: /text/i })).toHaveStyle({
      'font-size': theme.font.sizes.xhuge
    })
  })

  it('should render correct "font-size" when using mobile', () => {
    const { rerender } = renderTheme(<Heading>Text</Heading>)
    const heading = screen.getByRole('heading', { name: /text/i })

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">Text</Heading>
      </ThemeProvider>
    )
    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge, {
      media: theme.media.lteMedium
    })
  })

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>Text</Heading>)
    const heading = screen.getByRole('heading', { name: /text/i })

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase'
    })
  })

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">Text</Heading>)
    const heading = screen.getByRole('heading', { name: /text/i })
    const h6 = container.querySelector('h6')

    expect(heading).toBeInTheDocument()
    expect(h6?.tagName.toLowerCase()).toBe('h6')
  })

  it('should match snapshot', () => {
    const { container } = renderTheme(<Heading>text</Heading>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
