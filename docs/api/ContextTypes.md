# ContextTypes

## Description

`react-fiction` includes React `PropTypes` shapes for its context properties.

## Definitions

```js
const RoomDataShape = PropTypes.shape({
  info: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    component: PropTypes.func
  }),
  data: PropTypes.object,
  updateData: PropTypes.func
})
 
const StoryDataShape = PropTypes.shape({
  data: PropTypes.object,
  updateData: PropTypes.func,
  history: PropTypes.array,
  updateCurrentRoom: PropTypes.func
})
```

## Usage

```js
import React, { Component } from 'react'
import { ContextTypes } from 'react-fiction'

export default class YourComponent extends Component {
  render () {}
}

YourComponent.contextTypes = {
  room: ContextTypes.RoomDataShape,
  story: ContextTypes.StoryDataShape
}
```