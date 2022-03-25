import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Base from '.'
import { mockBase } from './mock'

export default {
  title: 'templates/Base',
  component: Base,
  args: { ...mockBase }
} as ComponentMeta<typeof Base>

export const Default: ComponentStory<typeof Base> = (args) => <Base {...args} />
