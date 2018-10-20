import { combineReducers } from 'redux-immutable'
import { Dispatch, Action, AnyAction } from 'redux'
import { routerReducer } from 'react-router-redux'

// import testReducer from './test-reducer'
import entitiesReducer from 'app/common/reducers/entities'
import selectionReducer from 'app/common/reducers/selection'

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}

export interface RootState {
  // test: any
}

export const rootReducer = combineReducers({
  entities: entitiesReducer as any,
  selection: selectionReducer as any,
  router: routerReducer as any
})
