import { Component, PropTypes as t } from 'react'
import invariant from 'invariant'

export default class Room extends Component {
  static propTypes = {
    id: t.string.isRequired,
    component: t.func.isRequired,
    title: t.string,
    start: t.bool
  }

  render () {
    invariant(
      false,
      'The Room component can\'t be rendered directly. It must be inside a Rooms component.'
    )
  }
}
