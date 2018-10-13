import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from './configureStore'
import { RouteMap } from './routes'

import './index.css'

const history = createHistory()
const store = configureStore(history as any)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <RouteMap />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
