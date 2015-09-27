import { Component, PropTypes as t, Children } from 'react'
import { connect } from 'react-redux'
import { addRoom, updateData, updateCurrentRoom } from '../ducks/story'

const room = t.oneOfType([ t.element, t.object ])
const rooms = t.oneOfType([ room, t.arrayOf(room) ])

@connect(null, { addRoom, updateData, updateCurrentRoom })
export default class Rooms extends Component {
  static propTypes = {
    children: rooms,
    addRoom: t.func.isRequired,
    updateData: t.func.isRequired,
    updateCurrentRoom: t.func.isRequired
  }

  componentWillMount () {
    Children.forEach(this.props.children, route => {
      this.props.addRoom(route.props.id, {
        id: route.props.id,
        title: route.props.title,
        component: route.props.component
      })

      this.props.updateData(route.props.id, {})

      if (route.props.start) {
        this.props.updateCurrentRoom(route.props.id)
      }
    })
  }

  render () {
    return null
  }
}
