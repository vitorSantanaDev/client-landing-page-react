import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MenuLink from '.'

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'My Link',
    link: 'https://google.com.br'
  }
} as ComponentMeta<typeof MenuLink>

export const Default: ComponentStory<typeof MenuLink> = (args) => (
  <div style={{ display: 'flex' }}>
    <MenuLink {...args} />
  </div>
)
