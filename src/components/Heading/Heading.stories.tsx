import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Heading from '.'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Title text is clear',
    colorDark: true
  },
  argTypes: {
    children: { type: 'string' },
    colorDark: { type: 'boolean' }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as ComponentMeta<typeof Heading>

export const Light: ComponentStory<typeof Heading> = (args) => {
  return <Heading {...args} />
}
export const Dark: ComponentStory<typeof Heading> = (args) => {
  return <Heading {...args} />
}

Light.parameters = {
  backgrounds: {
    default: 'ligth'
  }
}

Dark.args = {
  children: 'Title text is dark',
  colorDark: false
}
