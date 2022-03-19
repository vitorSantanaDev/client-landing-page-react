import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import GridTwoColumn from '.'
import mock from './mock'

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: { ...mock }
} as ComponentMeta<typeof GridTwoColumn>

export const Default: ComponentStory<typeof GridTwoColumn> = (args) => (
  <GridTwoColumn {...args} />
)
