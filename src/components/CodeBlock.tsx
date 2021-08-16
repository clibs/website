import React from 'react'
import styles from './CodeBlock.css'

interface Props {
  source: string
}

const CodeBlock: React.ComponentType<Props> = ({ source }) => (
  <div className={styles.code}>
    <pre>
      <code>{source}</code>
    </pre>
  </div>
)

CodeBlock.displayName = 'CodeBlock'

export default CodeBlock
