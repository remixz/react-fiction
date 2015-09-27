# `<Viewer>`

## Description

The `Viewer` component is hooked into your story's state, and sets various context properties for your story to use. This should be where your story is rendered, and must come after the [`Rooms`](`Rooms.md`) component. It has the class `react-fiction-viewer`, and has its `id` property set to the `id` of the current room.

## Usage

```js
import { Rooms, Viewer } from 'react-fiction'

// inside of a Story component
<Rooms>
  // your rooms
</Rooms>

<Viewer>
  // any components you wish to be rendered with the room and story context
  <RoomTitle />
  <RoomComponent />
<Viewer>
```

## Context Properties

`Viewer` sets two `context` properties, `room` and `story`, which can be accessed by any node inside of the `Viewer`. The [`ContextTypes`](ContextTypes.md) object includes definitions for your element's `contextTypes`.

### Updating Custom Data

Both `room` and `story` contain an object called `data`. This is where you can store any persisent data. A room's data is only accessible within itself, while the `story` data is accessible at any point. To update this data, you must call the `updateData(data: object)` function, which dispatches the `redux` action to update the store.

### `room`

This context property contains all of the info for the room the reader is currently in, and any . 

Add this to your `contextTypes`: `room: ContextTypes.RoomDataShape`

```js
{
  info: {
    id: 'unique-room-id',
    title: 'Room Title',
    component: SomeComponent
  },
  data: {
    // any data you wish to store for this room
  },
  updateData(data: object) // see above
}
```

### `story`

This context property contains all of the info stored globally for the story. 

Add this to your `contextTypes`: `story: ContextTypes.StoryDataShape`

```js
{
  data: {
    // any data you wish to store for this room
  },
  history: [] // an array of the reader's viewed rooms. stored in reverse chronological order. (i.e. to get the last room visited: `story.history[0]`)
  updateData(data: object), // see above
  updateCurrentRoom(id: string) // used by the `Link` property. pass a room's `id` to change to that room
}
```
