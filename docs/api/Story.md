# `<Story>`

## Description

The `Story` component should be your root level component in a story. It creates the `redux` store for your story, and wraps around the `Provider` component from `react-redux`. It must have two components as its children: [`Rooms`](Rooms.md) and [`Viewer`](Viewer.md). It has the class `react-fiction-story`.

## Usage

```js
import { Story, Rooms, Viewer } from 'react-fiction'

<Story>
  <Rooms>
    // your room definitions...
  </Rooms>
  <Viewer>
    // your viewer components...
  </Viewer>
</Story>
```
