import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import LogoLink from '.'

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'Logo link',
    srcImage: 'assets/images/logo.svg',
    link: 'http://localhost'
  }
} as ComponentMeta<typeof LogoLink>

export const ImageOnly: ComponentStory<typeof LogoLink> = (args) => (
  <LogoLink {...args} />
)
export const TextOnly: ComponentStory<typeof LogoLink> = (args) => (
  <LogoLink {...args} />
)

TextOnly.args = {
  srcImage: ''
}
