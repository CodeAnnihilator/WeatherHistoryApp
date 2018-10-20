import { actionTypes as at } from '../constants/entities'

export const requestTemperature = () => ({ type: at.REQUEST_TEMPERATURE })

export const requestTemperatureSuccess = (data: []) => ({
  type: at.REQUEST_TEMPERATURE_SUCCESS,
  payload: data
})