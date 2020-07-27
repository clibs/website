declare module 'react-syntax-highlighter/light' {
  import React from 'react'

  interface Props {
    language?: string
    style?: {
      [i: string]: {
        [p: string]: string
      }
    }
    children: string
  }

  const ReactSyntaxHighlighter: React.ComponentType<Props>
  export default ReactSyntaxHighlighter

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function registerLanguage(name: string, func: any): void
}

declare module 'react-syntax-highlighter/languages/hljs/bash' {}

declare module 'react-syntax-highlighter/styles/hljs/github' {
  interface Styles {
    [i: string]: {
      [p: string]: string
    }
  }
  const styles: Styles
  export default styles
}
