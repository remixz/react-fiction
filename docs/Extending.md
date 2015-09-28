# Extending `react-fiction`

`react-fiction` is a very small framework, only providing the components absolutely neccessary for a piece of interactive fiction. Because of this, it's very easy to extend, and create new elements for it.

## Accessing the story's state

If you are creating a component meant to be used inside of a [`Viewer`](api/Viewer.md) (i.e. a component meant to be rendered to the reader), you should use the `context` properties passed down by the `Viewer`. Read about the context properties [here](api/Viewer.md#context-properties). However, if you want to access the raw state of the story, you can. `react-fiction` is built on [`redux`](https://rackt.github.io/redux/), and therefore uses [`react-redux`](https://github.com/rackt/react-redux) to access the state. This means that if you want your component to have access to raw state, you can use `react-redux`'s [`connect`](https://github.com/rackt/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) function to get the raw state, and map it to your `props`. All of the story's state is under the `story` property passed to the `state` argument of `mapStateToProps`.

## Ideas

Here are some ideas that I've had for `react-fiction` components. Feel free to implement any of these! Make sure to send a PR to update this list, if you implement it. In the future, I may add a separate page for `react-fiction` components.

* `<InlineLink>` - Instead of displaying a room separately, when this link is clicked, it'll replace the link with the room's component inline.
* `<Undo> / <Redo>` - Many pieces of interactive fiction have an undo/redo system. With the `history` stored on the `story` context, plus `redux`'s idea of predictable states, this would be just a matter of storing the states on a Link click, and then having undo/redo set the app state to the previous/next state.
* `<Inventory>` - An inventory system could be implemented pretty easily with the `story` data object. It could be added outside of the `Viewer` (so it would need to hook into `react-redux`), and then the rendered inventory could be inside the `Viewer`. It might need hooks as well, to allow for a reader to interact with their inventory.
* `<Score>` - Similar to `Inventory` above.
