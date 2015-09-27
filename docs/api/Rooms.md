# `<Rooms>`

## Description

The `Rooms` component defines the available rooms for your story. It *must* be inside of a `Story` component, and inserted before your [`Viewer`](Viewer.md), or otherwise your `Viewer` will attempt to render itself without the current room defined on its first load. See the `Room` documentation for how to define each room.

## Usage

```js
import { Rooms } from 'react-fiction'

// inside of a Story component
<Rooms>
  <Room start id='room-1' title='The first room' component={SomeComponent} />
  // there can be as many rooms as you like
</Rooms>
```
