import createSagaMiddleware from 'redux-saga'
import { Store, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { enableBatching } from 'redux-batched-actions'

import { routerMiddleware } from 'react-router-redux'

import initialState from './root-state'
import { RootState, rootReducer } from './root-reducer'
import rootSaga from './root-saga'

export default function configureStore(history: any) {

  const composeEnhancers = composeWithDevTools({})
  const sagaMiddleware = createSagaMiddleware()

  const middleware = routerMiddleware(history)

  const store: Store<RootState> = createStore(
    enableBatching(rootReducer),
    initialState,
    composeEnhancers(
      applyMiddleware(middleware, sagaMiddleware)
    )
  )

  sagaMiddleware.run(rootSaga)

  // if (module.hot) {
  //   module.hot.accept('app/reducers', () => {
  //     const nextReducer = require('app/reducers');
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  return store
}
