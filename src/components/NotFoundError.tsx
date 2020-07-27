import React from 'react'
import ErrorMessage from './ErrorMessage'

interface Props {
  title: string
  header: string
  children?: React.ReactNode
}

const defaultChildren = (
  <p>
    If you believe this is an error, either submit an issue at{' '}
    <a
      href="https://github.com/clibs/website"
      target="_blank"
      rel="noopener noreferrer external"
    >
      github.com/clibs/website
    </a>{' '}
    or try again later.
  </p>
)

const NotFoundError: React.ComponentType<Props> = ({
  title,
  header,
  children = defaultChildren
}) => {
  return (
    <ErrorMessage title={title}>
      <strong>{header}</strong>
      {children}
    </ErrorMessage>
  )
}

NotFoundError.displayName = 'NotFoundError'

export default NotFoundError
