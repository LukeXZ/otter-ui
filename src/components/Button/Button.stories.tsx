import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Button from './Button'

export default {
  title: 'OtterUi/Button',
  component: Button,
} as Meta<typeof Button>

const template: StoryFn<typeof Button> = (args) => <Button {...args} />

export const exampleButton = template.bind({})
exampleButton.args = {
  label: 'hello otter ui'
}