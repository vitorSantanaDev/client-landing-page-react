import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Menu from '.'
import linksMock from '../NavLinks/mock'

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImage: ''
    }
  }
} as ComponentMeta<typeof Menu>

export const Basic: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

Basic.args = {}

export const Default: ComponentStory<typeof Menu> = (args) => <Menu {...args} />
