import React, { Component, PropTypes as t } from 'react'

export default class Passage extends Component {
  static propTypes = {
    children: t.node,
    className: t.string
  }

  render () {
    let props = {
      ...this.props,
      className: this.props.className ? `react-fiction-passage ${this.props.className}` : 'react-fiction-passage'
    }
    return (
      <p {...props}>
        {this.props.children}
      </p>
    )
  }
}
