import React, { ReactNode, useMemo } from 'react'
import styles from './Theme.module.css'

export interface ThemeProps {
  children: ReactNode
  lightColorScheme?: ThemeColorScheme
  darkColorScheme?: ThemeColorScheme
  className?: string
}

export interface ThemeColorScheme {
  primary: string
  onPrimary: string
  primaryContainer: string
  onPrimaryContainer: string
  secondary: string
  onSecondary: string
  secondaryContainer: string
  onSecondaryContainer: string
}

const Theme = React.memo(function Theme({
  children,
  lightColorScheme,
  darkColorScheme,
  className,
}: ThemeProps) {
  const colorProperties = useMemo(() => {
    const properties: { [x: string]: string } = {}
    if (lightColorScheme !== undefined) {
      for (const key in lightColorScheme) {
        properties[`--otter-color-${namingToProperties(key)}-light`] =
          lightColorScheme[key as keyof ThemeColorScheme]
      }
    }
    if (darkColorScheme !== undefined) {
      for (const key in darkColorScheme) {
        properties[`--otter-color-${namingToProperties(key)}-dark`] =
          darkColorScheme[key as keyof ThemeColorScheme]
      }
    }
    return properties
  }, [lightColorScheme, darkColorScheme])
  return (
    <div
      className={`${styles['otter-theme']}${' ' + className}`}
      style={colorProperties as React.CSSProperties}
    >
      {children}
    </div>
  )
})

const namingToProperties = (camelCase: string) => {
  return camelCase.replace(/[A-Z]+/g, (value) => {
    return `-${value.toLowerCase()}`
  })
}

export default Theme
