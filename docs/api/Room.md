# `<Room>`

## Description

The `Room` component is a configuration component to define each room in your story. It must be used inside of a [`Rooms`](Rooms.md) component. It cannot be rendered on its own.

## Usage

```js
import { Rooms, Room } from 'react-fiction'

// inside of a Story component
<Rooms>
  <Room start id='room-1' title='The first room' component={SomeComponent} />
  // there can be as many rooms as you like
</Rooms>
```

## Properties

| Property name | Required? | Description |
| ------------- | --------- | ----------- |
| `id`          | Yes       | A unique identifier string for the room. This is used for routing and room data, so ensure that it is a unique value. |
| `component`   | Yes       | The React component to render for the room. |
| `title`       | No        | A string to render as the room's title. |
| `start`       | Sometimes | A boolean value indicating if the room is the starting room. It must be set on one `Room` element inside of a `Rooms` container. |
