import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import GridText from '.'
import mock from './mock'

export default {
  title: 'GridText',
  component: GridText,
  args: { ...mock }
} as ComponentMeta<typeof GridText>

export const Default: ComponentStory<typeof GridText> = (args) => (
  <GridText {...args} />
)
