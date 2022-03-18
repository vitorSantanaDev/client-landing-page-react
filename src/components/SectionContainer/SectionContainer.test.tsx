import React from 'react'
import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/theme/render-theme'
import SectionContainer from '.'

describe('<SectionContainer />', () => {
  it('should render children', () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>Content</h1>
      </SectionContainer>
    )
    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
