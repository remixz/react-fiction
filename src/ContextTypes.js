import { PropTypes as t } from 'react'

export const RoomDataShape = t.shape({
  info: t.shape({
    id: t.string,
    title: t.string,
    component: t.func
  }),
  data: t.object,
  updateData: t.func
})

export const StoryDataShape = t.shape({
  data: t.object,
  updateData: t.func,
  history: t.array,
  updateCurrentRoom: t.func
})

export default {
  RoomDataShape,
  StoryDataShape
}
