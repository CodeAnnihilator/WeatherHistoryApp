import { combineReducers } from 'redux-immutable'
import { Dispatch, Action, AnyAction } from 'redux'
import { routerReducer } from 'react-router-redux'

import testReducer from './test-reducer'

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}

export interface RootState {
  test: any
}

export const rootReducer = combineReducers({
  test: testReducer as any,
  router: routerReducer as any
})
