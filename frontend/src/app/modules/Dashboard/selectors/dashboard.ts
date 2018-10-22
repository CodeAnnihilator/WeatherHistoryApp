import { createSelector } from 'reselect'
// import { toArray } from 'immutable'

import { getTemperature, getPrecipitation } from 'app/common/selectors/entities'

export const getCurrentTab = state => state.getIn(['dashboard', 'currentTab'])

export const getDataToRender = createSelector(
  [getTemperature, getPrecipitation, getCurrentTab],
  (temperature, precipitation, currentTab) => {
    if (currentTab === 'temperature') return temperature.toJS()
    if (currentTab === 'precipitation') return precipitation.toJS()
  }
)