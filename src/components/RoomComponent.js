import React, { Component } from 'react'
import { RoomDataShape } from '../ContextTypes'

export default class RoomComponent extends Component {
  static contextTypes = {
    room: RoomDataShape
  }

  render () {
    return React.createElement(this.context.room.info.component)
  }
}
