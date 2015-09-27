import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function configureStore (initialState = {}) {
  const store = createStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    // (see https://github.com/rackt/react-redux/releases/tag/v2.0.0)
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
