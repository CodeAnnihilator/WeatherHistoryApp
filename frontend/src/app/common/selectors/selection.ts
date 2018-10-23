import { createSelector } from 'reselect'

export const getMinValue = state => state.getIn(['selection', 'minValue'])
export const getMaxValue = state => state.getIn(['selection', 'maxValue'])
export const getCurrentMinValue = state => state.getIn(['selection', 'currentMinValue'])
export const getCurrentMaxValue = state => state.getIn(['selection', 'currentMaxValue'])

export const getIsDetailedAvailable = createSelector(
  [getCurrentMinValue, getCurrentMaxValue],
  (min, max) => {
    if ((max - min) === 1) {
      return true
    } else {
      return false
    }
  }
)