import { createSelector } from 'reselect'

export const getTemperature = state => state.getIn(['entities', 'temperature'])
export const getPrecipitation = state => state.getIn(['entities', 'precipitation'])

export const isDataLoaded = createSelector(
  [getTemperature, getPrecipitation],
  (temperature, precipitation) => {
    if (!temperature.size && !precipitation.size) {
      return false
    } else {
      return true
    }
  }
)