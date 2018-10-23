import { fromJS } from 'immutable'

import { actionTypes as at } from '../constants/dashboard'

const initialState = fromJS({
  currentTab: 'temperature',
  aggregation: 'max',
  isDetailed: false
})

export default (state = initialState, action: any) => {
  switch (action.type) {
    case at.SWITCH_TAB:
      return state
        .set('currentTab', action.payload)
        .set('aggregation', state.get('currentTab') === 'temperature' ? 'total' : 'max')
    case at.SWITCH_AGGREGATION:
      return state
        .set('aggregation', action.payload)
    case at.TOGGLE_IS_DETAILED:
      return state
        .set('isDetailed', !state.get('isDetailed'))
    default:
      return state
  }
}