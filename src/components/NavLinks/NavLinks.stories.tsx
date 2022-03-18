import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import NavLinks from '.'
import links from './mock'

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    links: links
  }
} as ComponentMeta<typeof NavLinks>

export const Default: ComponentStory<typeof NavLinks> = (args) => (
  <NavLinks {...args} />
)
