declare module 'react-document-meta' {
  import React from 'react'

  interface Props {
    title?: string
    description?: string
    meta?: {
      name: {
        [key: string]: string
      }
    }
  }

  const MetaTags: React.FC<Props>
  export default MetaTags
}
