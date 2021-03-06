import * as React from 'react'
import './OptionBar.css'
import { Props } from './OptionBar.types'

export default class OptionBar extends React.PureComponent<Props> {
  render() {
    const { children, percentage, position } = this.props
    let classes = `OptionBar color-${position % 5}`
    return (
      <div className={classes}>
        <div className="bar" style={{ width: `${percentage}%` }} />
        <div className="label">
          {children}
          &nbsp;(
          {percentage}
          %)
        </div>
      </div>
    )
  }
}
