import React, { useMemo } from 'react'
import styles from './Button.module.css'

export interface OtterButtonProp {
  label: string
  iconClass?: string
  size: 'regular' | 'large'
  onClick: () => void
}

const Button = ({ label, size = 'regular', onClick }: OtterButtonProp) => {
  const buttonClass = useMemo(() => {
    switch (size) {
      case 'regular':
        return `${styles['button']} ${styles['button-size-regular']}`
      case 'large':
        return `${styles['button']} ${styles['button-size-large']}`
      default:
        return styles['button']
    }
  }, [size])

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
