declare module 'react-github-fork-ribbon' {
  import React from 'react'

  interface Props extends React.HTMLAttributes<HTMLDivElement> {
    position: 'left' | 'right' | 'bottom-left' | 'bottom-right'
    href: string
    target?: string
    color?: 'red' | 'orange' | 'green' | 'black'
  }

  const GithubForkRibbon: React.ComponentType<Props>

  export default GithubForkRibbon
}
