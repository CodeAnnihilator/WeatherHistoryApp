import { fromJS } from 'immutable'

import { actionTypes as at } from '../constants/entities'

const initialState = fromJS({
  temperature: [],
  precipitation: []
})

export default (state = initialState, action: any) => {
  switch (action.type) {
    case at.REQUEST_TEMPERATURE_SUCCESS:
      return state
        .set('temperature', action.payload)
    case at.REQUEST_PRECIPITATION_SUCCESS:
      return state
        .set('precipitation', action.payload)
    default:
      return state
  }
}