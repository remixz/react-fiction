# Extending `react-fiction`

`react-fiction` is a very small framework, only providing the components absolutely neccessary for a piece of interactive fiction. Because of this, it's very easy to extend, and create new elements for it.

## Accessing the story's state

If you are creating a component meant to be used inside of a [`Viewer`](api/Viewer.md) (i.e. a component meant to be rendered to the reader), you should use the `context` properties passed down by the `Viewer`. Read about the context properties [here](api/Viewer.md#context-properties). However, if you want to access the raw state of the story, you can. `react-fiction` is built on [`redux`](https://rackt.github.io/redux/), and therefore uses [`react-redux`](https://github.com/rackt/react-redux) to access the state. This means that if you want your component to have access to raw state, you can use `react-redux`'s [`connect`](https://github.com/rackt/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) function to get the raw state, and map it to your `props`. All of the story's state is under the `story` property passed to the `state` argument of `mapStateToProps`.
