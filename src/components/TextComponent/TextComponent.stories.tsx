import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TextComponent from '.'

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, incidunt quaerat soluta possimus, assumenda doloremque, dolorum impedit veniam accusamus optio sint maiores. Perferendis architecto porro sequi et reiciendis, possimus iste.'
  }
} as ComponentMeta<typeof TextComponent>

export const Basic: ComponentStory<typeof TextComponent> = (args) => (
  <TextComponent {...args} />
)
