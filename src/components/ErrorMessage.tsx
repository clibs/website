import React from 'react'
import styles from './ErrorMessage.css'

interface Props {
  children: React.ReactNode
  title: string
}

const ErrorMessage: React.ComponentType<Props> = ({
  children,
  title = 'An unexpected error occurred'
}) => (
  <div className={styles.error} role="alert">
    <div className={styles.title}>
      <h4>{title}</h4>
    </div>
    <div className={styles.details}>{children}</div>
  </div>
)

ErrorMessage.displayName = 'ErrorMessage'

export default ErrorMessage
