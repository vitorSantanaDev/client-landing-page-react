import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Footer from '.'

export default {
  title: 'Footer',
  component: Footer,
  args: {
    children:
      '<p><a href="https://github.com/vitorSantanaDev">Feito com ❤️ por Vitor Santana</a></p>'
  }
} as ComponentMeta<typeof Footer>

export const Default: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args} />
)
