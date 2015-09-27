import React, { Component } from 'react'
import { RoomDataShape } from '../ContextTypes'

export default class RoomTitle extends Component {
  static contextTypes = {
    room: RoomDataShape
  }

  render () {
    return (<h1>{this.context.room.info.title}</h1>)
  }
}
