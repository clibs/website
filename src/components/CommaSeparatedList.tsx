/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import * as styles from './CommaSeparatedList.css'

interface Props {
  items: any[]
  renderItem: (item: any) => React.ReactNode
}

const CommaSeparatedList: React.ComponentType<Props> = ({
  items,
  renderItem
}) => <ul className={styles.list}>{items.map(renderItem)}</ul>

CommaSeparatedList.displayName = 'CommaSeparatedList'

export default CommaSeparatedList
