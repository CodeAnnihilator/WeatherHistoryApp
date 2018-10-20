import { fromJS } from 'immutable'

import { actionTypes as at } from '../constants/selection'

const initialState = fromJS({
  minValue: null,
  maxValue: null,
  currentMinValue: null,
  currentMaxValue: null
})

export default (state = initialState, action: any) => {
  switch (action.type) {
    case at.SET_INITIAL_VALUES:
      return state
        .set('minValue', action.payload.minValue)
        .set('maxValue', action.payload.maxValue)
        .set('currentMinValue', action.payload.currentMinValue)
        .set('currentMaxValue', action.payload.currentMaxValue)
    case at.CHANGE_SELECTION_VALUES:
      return state
        .set('currentMinValue', action.payload.min)
        .set('currentMaxValue', action.payload.max)
    default:
      return state
  }
}