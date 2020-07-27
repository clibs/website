import React from 'react'
// NOTE: `react-syntax-highlighter@v6` is used here (rather than latest) as it works with Parcel.
// Custom TS definitions are at `/typings/react-syntax-highlighter`.
import SyntaxHighlighter, {
  registerLanguage
} from 'react-syntax-highlighter/light'
import bash from 'react-syntax-highlighter/languages/hljs/bash'
import highlighterStyles from 'react-syntax-highlighter/styles/hljs/github'
import styles from './CodeBlock.css'

registerLanguage('bash', bash)

interface Props {
  source: string
}

const CodeBlock: React.ComponentType<Props> = ({ source }) => (
  <div className={styles.code}>
    <SyntaxHighlighter language="bash" style={highlighterStyles}>
      {source}
    </SyntaxHighlighter>
  </div>
)

CodeBlock.displayName = 'CodeBlock'

export default CodeBlock
