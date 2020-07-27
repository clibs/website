import React from 'react'
import * as Analytics from 'react-ga'
import { Platform } from '../components/InstallationGuide'

/**
 * Initialize the analytics client.
 */

export const init = (): void => {
  // Default to a "fake" ID.
  const trackingId = process.env.GA_TRACKING_ID || 'UA-111111111-1'
  const env = process.env.NODE_ENV || 'development'
  Analytics.initialize(trackingId, {
    debug: env === 'development'
  })
}

/**
 * Track a runtime error.
 */

export const error = (message: string, fatal = false): void => {
  Analytics.exception({ description: message, fatal })
}

/**
 * Track a page view.
 */

export const page = (path = window.location.pathname): void => {
  Analytics.pageview(path)
}

/**
 * Track a "package search submission" event.
 */

export const submitSearch = (): void => {
  Analytics.event({
    action: 'Submit',
    category: 'Search'
  })
}

/**
 * Track a "package selected" event.
 */

export const selectPackage = (): void => {
  Analytics.event({
    action: 'Select',
    category: 'Search',
    label: 'Package'
  })
}

/**
 * Track toggling installation instruction platform.
 */

export const selectInstallationInstruction = (platform: Platform): void => {
  let label = ''
  if (platform === Platform.MacOS) {
    label = 'MacOS'
  } else if (platform === Platform.Linux) {
    label = 'Linux'
  } else if (platform === Platform.Windows) {
    label = 'Windows'
  } else if (platform === Platform.Other) {
    label = 'Other'
  } else {
    throw new Error('Invalid platform')
  }

  Analytics.event({
    action: 'Select',
    category: 'Install Guide',
    value: platform,
    label
  })
}

/**
 * Track a "missing package" page view event.
 */

export const missingPackage = (owner: string, repo: string): void => {
  Analytics.event({
    action: 'Missing Package',
    category: 'Navigation',
    label: `${owner}/${repo}`,
    nonInteraction: true
  })
}

/**
 * Track a "missing group" (keyword/category) page view event.
 */

export const missingGroup = (group: string, name: string): void => {
  Analytics.event({
    action: 'Missing Group',
    category: 'Navigation',
    label: `${group} - ${name}`,
    nonInteraction: true
  })
}

interface OutboundLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  eventLabel: string
}

/**
 * External link with built-in tracking.
 */

export const OutboundLink: React.ComponentType<OutboundLinkProps> = ({
  href,
  eventLabel,
  rel = 'external',
  children,
  ...props
}) => {
  const handleClick = (): void => {
    Analytics.outboundLink(
      {
        label: eventLabel
      },
      (): void => {
        window.location.href = href
      }
    )
  }

  return (
    <a {...props} rel={rel} href={href} onClick={handleClick}>
      {children}
    </a>
  )
}
