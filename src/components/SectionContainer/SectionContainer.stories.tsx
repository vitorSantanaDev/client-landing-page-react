import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SectionContainer from '.'

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Section Container</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          quae numquam illum delectus optio adipisci in repudiandae eligendi
          minus eum nihil aperiam saepe, porro aspernatur, dolore assumenda
          impedit. Quo, similique.
        </p>
      </div>
    )
  }
} as ComponentMeta<typeof SectionContainer>

export const Default: ComponentStory<typeof SectionContainer> = (args) => (
  <SectionContainer {...args} />
)
