import React from 'react'
import styles from './Button.module.css'

export interface OtterUIButtonProp {
  label: string
}

const Button = ({label}: OtterUIButtonProp) => {
  return (
    <button className={styles['button-container']}>{label}</button>
  )
}

export default Button
