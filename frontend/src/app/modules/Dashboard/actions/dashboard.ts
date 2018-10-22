import { actionTypes as at } from '../constants/dashboard'

export const switchTab = (data: []) => ({
  type: at.SWITCH_TAB,
  payload: data
})