import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Theme, { ThemeColorScheme } from './Theme'
import Button from '../Button/Button'

export default {
  title: 'OtterUi/Theme',
  component: Theme,
} as Meta<typeof Theme>

const lightColorScheme: ThemeColorScheme = {
  primary: '#3a5a40',
  onPrimary: '#dad7cd',
  primaryContainer: '#a3b18a',
  onPrimaryContainer: '#344e41',
  secondary: '#a5a58d',
  onSecondary: '#ffe8d6',
  secondaryContainer: '#a5a58d',
  onSecondaryContainer: '#6b705c',
}

const template: StoryFn<typeof Theme> = (args) => (
  <Theme
    lightColorScheme={args.lightColorScheme}
    darkColorScheme={args.darkColorScheme}
  >
    <Button label="Theme Button" size="regular" onClick={() => undefined} />
  </Theme>
)

export const exampleTheme = template.bind({})

exampleTheme.args = {
  lightColorScheme: lightColorScheme,
  darkColorScheme: lightColorScheme,
}
