import { actionTypes as at } from '../constants/selection'

export const setInitialValues = (data: any) => ({
  type: at.SET_INITIAL_VALUES,
  payload: data
})

export const changeSelectionValues = (data: any) => ({
  type: at.CHANGE_SELECTION_VALUES,
  payload: data
})