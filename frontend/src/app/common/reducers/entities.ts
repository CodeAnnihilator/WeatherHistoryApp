import { fromJS, List } from 'immutable'

import { actionTypes as at } from '../constants/entities'

const initialState = fromJS({
  temperature: List(),
  precipitation: List()
})

export default (state = initialState, action: any) => {
  switch (action.type) {
    case at.REQUEST_TEMPERATURE_SUCCESS:
      return state
        .set('temperature', action.payload)
    default:
      return state
  }
}