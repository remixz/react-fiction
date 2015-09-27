# Usage

Welcome, author! This is a rundown on how to use `react-fiction` to create interactive fiction. For detailed information on each component, see the [API section](api/README.md). If you wish to see a completed example, see the [example file](https://github.com/remixz/react-fiction/blob/master/example/index.js) provided with `react-fiction`.

## Requirements

`react-fiction` requires React 0.14 or higher.

## Installation

```bash
npm install react-fiction --save
```

## Creating your story

To start, you'll want to create the component for your story. Here's a boilerplate:

```js
// index.js
import React, { Component } from 'react'
import { render } from 'react-dom'

class ExampleStory extends Component {
  render () {
    return (

    )
  }
}

render(<ExampleStory />, document.getElementById('root'))
```

The first component any `react-fiction` story must have is the [`Story`](api/Story.md) component. This initializes the story's state, and tracks where the reader is.

```js
// index.js
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Story } from 'react-fiction'

class ExampleStory extends Component {
  render () {
    return (
      <Story>

      </Story>
    )
  }
}

render(<ExampleStory />, document.getElementById('root'))
```

Awesome! Just one element in, and you already have state tracking set up for your story.

## Defining rooms

Any good piece of interactive fiction has rooms. Otherwise... well, the reader wouldn't be looking at much. In `react-fiction`, rooms are defined with two React components: [`Rooms`](api/Rooms.md) and [`Room`](api/Room.md). Let's look at an example of defining a room.

```js
// index.js
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Story, Rooms, Room } from 'react-fiction'
import FirstRoom from './FirstRoom'

class ExampleStory extends Component {
  render () {
    return (
      <Story>
        <Rooms>
          <Room id='room-1' title='First Room' component={FirstRoom} start />
        </Rooms>
      </Story>
    )
  }
}

render(<ExampleStory />, document.getElementById('root'))
```

In the `Story` component, we've added the `Rooms` component. The `Rooms` component holds all of the room configurations, which are defined with the `Room` component. You'll notice a bunch of porperties set on the `Room` component. Here's a rundown of them:

| Property name | Required? | Description |
| ------------- | --------- | ----------- |
| `id`          | Yes       | A unique identifier string for the room. This is used for routing and room data, so ensure that it is a unique value. |
| `title`       | No        | A string to render as the room's title. |
| `component`   | Yes       | The React component to render for the room. |
| `start`       | Sometimes | A boolean value indicating if the room is the starting room. It must be set on one `Room` element inside of a `Rooms` container. |

An important note: The `Rooms` component *must* be the first component defined inside of the `Story`, to ensure that the rooms are defined before the story is rendered.

## Rendering the story

After you've defined the rooms, you now need to add a way for the reader to see them. This is done with the [`Viewer`](api/Viewer.md), and a collection of other components. Let's look at an example first:

```js
// index.js
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Story, Rooms, Room, Viewer, RoomTitle, RoomComponent } from 'react-fiction'
import FirstRoom from './FirstRoom'

class ExampleStory extends Component {
  render () {
    return (
      <Story>
        <Rooms>
          <Room id='room-1' title='First Room' component={FirstRoom} start />
        </Rooms>

        <Viewer>
          <RoomTitle />
          <RoomComponent />
        </Viewer>
      </Story>
    )
  }
}

render(<ExampleStory />, document.getElementById('root'))
```

The `Viewer` component tracks the story's state, created with the `Story` component, and passes the neccessary data to the elements inside of the Viewer. You can see what data is passed [here](api/Viewer.md#context-properties).

Note that the `Viewer` itself doesn't render the story. Instead, it's the job of the components inside to take the data passed by the `Viewer`, and display what's neccessary. In this case, we're using two built-in components of `react-fiction`: [`RoomTitle`](api/RoomTitle.md) and [`RoomComponent`](api/RoomComponent.md). Their names explain their usage: `RoomTitle` displays the current room's title, and `RoomComponent` renders the current room's component.

## Linking to other rooms

It's more than likely you'll want to link to other rooms that you've visited. For this, there is the [`Link`](api/Link.md) component. It should be used inside a room component, rendered within a `Viewer`.

```js
<Link to='room-id'> Click me </Link>
```

The `Link` component takes a `to` property, which should be set to the `id` of the room you wish to link to.
