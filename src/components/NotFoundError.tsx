import React from 'react'
import { OutboundLink } from '../lib/analytics'
import ErrorMessage from './ErrorMessage'

interface Props {
  title: string
  header: string
  children?: React.ReactNode
}

const NotFoundError: React.ComponentType<Props> = ({
  title,
  header,
  children = (
    <p>
      If you believe this is an error, either submit an issue at{' '}
      <OutboundLink
        href="https://github.com/clibs/website"
        target="_blank"
        rel="noopener noreferrer external"
        eventLabel="Github Repository"
      >
        github.com/clibs/website
      </OutboundLink>{' '}
      or try again later.
    </p>
  )
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
