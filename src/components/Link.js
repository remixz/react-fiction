import React, { Component, PropTypes as t } from 'react'
import { StoryDataShape } from '../ContextTypes'

export default class Link extends Component {
  static propTypes = {
    children: t.node,
    className: t.string,
    to: t.string.isRequired
  }

  static contextTypes = {
    story: StoryDataShape
  }

  handleClick (e) {
    e.preventDefault()

    this.context.story.updateCurrentRoom(this.props.to)
  }

  render () {
    let className = 'react-fiction-link'
    if (this.props.className) className += ` ${this.props.className}`
    if (this.context.story.history.indexOf(this.props.to) !== -1) className += ' visited'
    let props = {
      ...this.props,
      className,
      onClick: this.handleClick.bind(this)
    }

    return (
      <button {...props}> {this.props.children} </button>
    )
  }
}
