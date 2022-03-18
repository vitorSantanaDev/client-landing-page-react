import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SectionBackground from '.'

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Section Background</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          quae numquam illum delectus optio adipisci in repudiandae eligendi
          minus eum nihil aperiam saepe, porro aspernatur, dolore assumenda
          impedit. Quo, similique.
        </p>
      </div>
    )
  }
} as ComponentMeta<typeof SectionBackground>

export const LightOnly: ComponentStory<typeof SectionBackground> = (args) => (
  <SectionBackground {...args} />
)

export const DarkOnly: ComponentStory<typeof SectionBackground> = (args) => (
  <SectionBackground {...args} />
)

DarkOnly.args = {
  background: true
}
