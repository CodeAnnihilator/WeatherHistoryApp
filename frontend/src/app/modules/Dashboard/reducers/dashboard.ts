import { fromJS } from 'immutable'

import { actionTypes as at } from '../constants/dashboard'

const initialState = fromJS({
  currentTab: 'temperature'
})

export default (state = initialState, action: any) => {
  switch (action.type) {
    case at.SWITCH_TAB:
      return state
        .set('currentTab', action.payload)
    default:
      return state
  }
}