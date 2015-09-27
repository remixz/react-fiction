// wondering what a duck is? well, it's a bird, you silly goose. :-)
// for real, see here: https://github.com/erikras/ducks-modular-redux

const ADD_ROOM = 'react-fiction/story/ADD_ROOM'
const UPDATE_DATA = 'react-fiction/story/UPDATE_DATA'
const UPDATE_CURRENT_ROOM = 'react-fiction/story/UPDATE_CURRENT_ROOM'

export default function reducer (state = {
  rooms: {},
  data: {
    'react-fiction/story': {}
  },
  currentRoom: '',
  history: []
}, action) {
  switch (action.type) {
    case ADD_ROOM:
      return {
        ...state,
        rooms: {
          ...state.rooms,
          [action.key]: action.room
        }
      }
    case UPDATE_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          [action.key]: action.data
        }
      }
    case UPDATE_CURRENT_ROOM:
      if (state.currentRoom !== '') {
        state.history.unshift(state.currentRoom)
      }

      return {
        ...state,
        currentRoom: action.currentRoom
      }
    default:
      return state
  }
}

export function addRoom (key, room) {
  return {
    type: ADD_ROOM,
    key, room
  }
}

export function updateData (key, data) {
  return {
    type: UPDATE_DATA,
    key, data
  }
}

export function updateCurrentRoom (currentRoom) {
  return {
    type: UPDATE_CURRENT_ROOM,
    currentRoom
  }
}
