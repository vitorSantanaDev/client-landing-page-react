import React from 'react'
import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/theme/render-theme'
import SectionBackground from '.'

describe('<SectionBackground />', () => {
  it('should render with background dark', () => {
    const { container } = renderTheme(
      <SectionBackground background>
        <h1>Content</h1>
      </SectionBackground>
    )
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render with background light', () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>Content</h1>
      </SectionBackground>
    )
    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
