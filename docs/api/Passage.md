# `<Passage>`

## Description

A element to put text into. Its base is a `<p>` element, which has the class `react-fiction-passage` added to it.

## Usage

```js
import React, { Component } from 'react'
import { Passage } from 'react-fiction'

class SomeComponent extends Component {
  render () {
    return (
      <div>
        <Passage> You're in a dark room. </Passage>
      </div>
    )
  }
}
```

## Properties

This component's base is a `<p>`, and inherits any properties passed to it.
