import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import GridContent from '.'
import mock from './mock'

export default {
  title: 'GridContent',
  component: GridContent,
  args: { ...mock }
} as ComponentMeta<typeof GridContent>

export const Default: ComponentStory<typeof GridContent> = (args) => (
  <GridContent {...args} />
)
