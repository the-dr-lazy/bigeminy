import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import * as Store from './store'
import { App } from './app'

const rootElement = document.getElementById('root')

function main() {
  const store = Store.createStore()

  console.log(Store.Counter.increment.purs)

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  )
}

main()
