import { actionTypes as at } from '../constants/entities'

export const requestTemperature = () => ({ type: at.REQUEST_TEMPERATURE })
export const requestPrecipitation = () => ({ type: at.REQUEST_PRECIPITATION })

export const requestTemperatureSuccess = (data: []) => ({
  type: at.REQUEST_TEMPERATURE_SUCCESS,
  payload: data
})

export const requestPrecipitationSuccess = (data: []) => ({
  type: at.REQUEST_PRECIPITATION_SUCCESS,
  payload: data
})