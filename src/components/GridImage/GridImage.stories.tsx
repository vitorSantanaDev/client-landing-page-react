import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import GridImage from '.'
import mock from './mock'

export default {
  title: 'GridImage',
  component: GridImage,
  args: { ...mock }
} as ComponentMeta<typeof GridImage>

export const Default: ComponentStory<typeof GridImage> = (args) => (
  <GridImage {...args} />
)
