import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import GoTop from '.'

export default {
  title: 'GoTop',
  component: GoTop,
  args: {}
} as ComponentMeta<typeof GoTop>

export const Default: ComponentStory<typeof GoTop> = (args) => (
  <div style={{ height: '300vh' }}>
    <h1>Lorem</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, quidem
      ullam perferendis assumenda magni blanditiis recusandae omnis nostrum
      doloremque voluptatibus illo culpa quisquam nisi. Cupiditate quam sint rem
      voluptate eveniet!
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, quidem
      ullam perferendis assumenda magni blanditiis recusandae omnis nostrum
      doloremque voluptatibus illo culpa quisquam nisi. Cupiditate quam sint rem
      voluptate eveniet!
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, quidem
      ullam perferendis assumenda magni blanditiis recusandae omnis nostrum
      doloremque voluptatibus illo culpa quisquam nisi. Cupiditate quam sint rem
      voluptate eveniet!
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, quidem
      ullam perferendis assumenda magni blanditiis recusandae omnis nostrum
      doloremque voluptatibus illo culpa quisquam nisi. Cupiditate quam sint rem
      voluptate eveniet!
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, quidem
      ullam perferendis assumenda magni blanditiis recusandae omnis nostrum
      doloremque voluptatibus illo culpa quisquam nisi. Cupiditate quam sint rem
      voluptate eveniet!
    </p>
    <GoTop {...args} />
  </div>
)
