# `<Link>`

## Description

A clickable link that goes to another room. Must be within a [`Viewer`](Viewer.md) at some level. It has the class `react-fiction-link`. As it's not a real link (i.e. not `<a>`), when the link has been visited before, it will have the `visited` class added to it.

## Usage

```js
import React, { Component } from 'react'
import { Link } from 'react-fiction'

class SomeComponent extends Component {
  render () {
    return (
      <div>
        <Link to='room-2'> Click me </Link>
      </div>
    )
  }
}
```

## Properties

This component's base is a `<button>`, and inherits any properties passed to it.

| Property name | Required? | Description |
| ------------- | --------- | ----------- |
| `to`          | Yes       | The id string of the room you wish to link to. |
