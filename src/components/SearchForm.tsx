import React from 'react'
import Autocomplete from 'react-autocomplete'
import { useHistory, useLocation } from 'react-router'
import { stringify, parse } from 'qs'
import * as analytics from '../lib/analytics'
import classNames from '@sindresorhus/class-names'
import { packages } from '../registry'
import { Package } from '../types'
import styles from './SearchForm.css'

const getItemValue = (p: Package): string => p.name

const shouldItemRender = (p: Package, name: string): boolean =>
  p.name.toLowerCase().includes(name.toLowerCase())

const renderItem = (p: Package, highlight: boolean): React.ReactElement => (
  <div
    className={classNames({
      [styles.item]: true,
      [styles.highlight]: highlight
    })}
  >
    {p.name}
  </div>
)

const SearchForm: React.ComponentType = () => {
  const history = useHistory()
  const location = useLocation()

  const { q } = parse(location.search.substr(1))
  const [value, setValue] = React.useState(q || '')

  const handleSubmit = (e: React.FormEvent): void => {
    // Do not search for "".
    if (value === '') {
      return
    }

    analytics.submitSearch()

    e.preventDefault()
    const q = stringify({ q: value })
    history.push(`/search?${q}`)
  }

  const handleChange = (e: React.ChangeEvent, name: string): void =>
    setValue(name)

  const handleSelect = (name: string): void => {
    analytics.selectPackage()
    history.push(`/packages/${name}`)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="q" className={styles.label}>
        Search
      </label>

      <Autocomplete
        value={value}
        wrapperProps={{ className: styles.container }}
        inputProps={{
          className: styles.input,
          placeholder: 'Find a package',
          id: 'q',
          name: 'q'
        }}
        items={packages}
        getItemValue={getItemValue}
        shouldItemRender={shouldItemRender}
        onChange={handleChange}
        onSelect={handleSelect}
        renderItem={renderItem}
      />

      <button type="submit" className={styles.submit}>
        <span className={styles.label}>search</span>
        <svg viewBox="0 0 34 34" fill="none" stroke="currentColor">
          <ellipse strokeWidth="3" cx="16" cy="15" rx="12" ry="12" />
          <path d="M26 26 l 8 8" strokeWidth="3" strokeLinecap="square" />
        </svg>
      </button>
    </form>
  )
}

SearchForm.displayName = 'SearchForm'

export default SearchForm
