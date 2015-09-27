import React, { Component, PropTypes as t } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store'

const store = configureStore()

export default class Story extends Component {
  static propTypes = {
    children: t.node.isRequired
  }

  render () {
    return (
      <Provider store={store}>
        <div className='react-fiction-story'>
          {this.props.children}
        </div>
      </Provider>
    )
  }
}
