import { actionTypes as at } from '../constants/dashboard'

export const switchTab = (data: []) => ({
  type: at.SWITCH_TAB,
  payload: data
})

export const switchAggregation = (data: string) => ({
  type: at.SWITCH_AGGREGATION,
  payload: data
})

export const toggleIsDetailed = () => ({ type: at.TOGGLE_IS_DETAILED })