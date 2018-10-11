import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import configureStore from './configureStore'
import { RouteMap } from './routes'

const history = createBrowserHistory()
const initialState = window.initialReduxState
const store = configureStore(history, initialState)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <RouteMap />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
