import React, { Component, PropTypes as t } from 'react'
import { connect } from 'react-redux'
import invariant from 'invariant'
import { RoomDataShape, StoryDataShape } from '../ContextTypes'
import { updateData, updateCurrentRoom } from '../ducks/story'

function mapStateToProps (state, props) {
  let { story: { rooms, data, currentRoom, history } } = state

  return { rooms, data, currentRoom, history }
}

@connect(mapStateToProps, { updateData, updateCurrentRoom })
export default class Viewer extends Component {
  static propTypes = {
    children: t.node,
    rooms: t.object.isRequired,
    data: t.object.isRequired,
    currentRoom: t.string.isRequired,
    history: t.array.isRequired,
    updateData: t.func.isRequired,
    updateCurrentRoom: t.func.isRequired
  }

  static childContextTypes = {
    room: RoomDataShape,
    story: StoryDataShape
  }

  getChildContext () {
    return {
      room: {
        info: this.props.rooms[this.props.currentRoom],
        data: this.props.data[this.props.currentRoom],
        updateData: this.props.updateData.bind(null, this.props.currentRoom)
      },
      story: {
        data: this.props.data['react-fiction/story'],
        updateData: this.props.updateData.bind(null, 'react-fiction/story'),
        history: this.props.history,
        updateCurrentRoom: this.props.updateCurrentRoom
      }
    }
  }

  render () {
    let { rooms, currentRoom } = this.props
    let room = rooms[currentRoom]

    invariant(
      room,
      'The Viewer was unable to find a room to render. This typically happens when you didn\'t set a starting room. One of your Room components must have the `start` property set on it.'
    )

    return (
      <div id={currentRoom} className='react-fiction-viewer'>
        {this.props.children}
      </div>
    )
  }
}
