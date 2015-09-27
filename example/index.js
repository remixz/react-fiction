import React, { Component } from 'react'
import { render } from 'react-dom'

import {
  Story, Viewer, Rooms, Room, Passage, Link, RoomTitle, RoomComponent, ContextTypes
} from '../'

import '../styles/default.css'

class Example extends Component {
  render () {
    return (
      <Story>
        <Rooms>
          <Room start id='room-1' title='Lab' component={DarkRoom} />
          <Room id='room-2' title='Lab' component={LightRoom} />
        </Rooms>

        <Viewer>
          <RoomTitle />
          <RoomComponent />
        </Viewer>
      </Story>
    )
  }
}

class DarkRoom extends Component {
  static contextTypes = {
    story: ContextTypes.StoryDataShape
  }

  render () {
    let { story } = this.context

    return (
      <div>
        <Passage>
          {story.data.turnedOnLight ? 'The room is dark again.' : 'You are in a dark room.'}
        </Passage>

        <Link to='room-2'> Turn on light </Link>
      </div>
    )
  }
}

class LightRoom extends Component {
  static contextTypes = {
    room: ContextTypes.RoomDataShape,
    story: ContextTypes.StoryDataShape
  }

  componentWillMount () {
    let { room, story } = this.context

    room.data.visited = (room.data.visited ? room.data.visited + 1 : 1)
    story.data.turnedOnLight = true

    room.updateData(room.data)
    story.updateData(story.data)
  }
  render () {
    let { room } = this.context
    return (
      <div>
        <Passage>
          The room is now illuminated. You've turned on this light {room.data.visited} times.
        </Passage>

        <Link to='room-1'> Turn off light </Link>
      </div>
    )
  }
}

render(<Example />, document.getElementById('root'))
