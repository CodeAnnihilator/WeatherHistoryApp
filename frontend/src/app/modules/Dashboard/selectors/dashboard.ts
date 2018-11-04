import { createSelector } from 'reselect'
import * as d3 from 'd3'

import {
  getTemperature,
  getPrecipitation
} from 'app/common/selectors/entities'

import {
  getCurrentMinValue,
  getCurrentMaxValue,
  getIsDetailedAvailable
} from 'app/common/selectors/selection'

export const getCurrentTab = state => state.getIn(['dashboard', 'currentTab'])
export const getAggregation = state => state.getIn(['dashboard', 'aggregation'])
export const getIsDetailed = state => state.getIn(['dashboard', 'isDetailed'])

export const getCurrentData = createSelector(
  [getTemperature, getPrecipitation, getCurrentTab],
  (temperature, precipitation, currentTab) => {
    if (currentTab === 'temperature') return temperature.toJS()
    if (currentTab === 'precipitation') return precipitation.toJS()
  }
)

const getCurrentAggregationFunc = createSelector(
  [getAggregation],
  (aggregation) => {
    if (aggregation === 'max') return d3.max
    if (aggregation === 'min') return d3.min
    if (aggregation === 'avg') return d3.mean
    if (aggregation === 'total') return d3.sum
  }
)

const getSlicedDate = createSelector(
  [getIsDetailedAvailable, getIsDetailed],
  (isDetailedAvailable, isDetailed) => {
    if (!isDetailedAvailable) return (date) => date.slice(0, 4)
    if (isDetailedAvailable && isDetailed) return (date) => date
    if (isDetailedAvailable && !isDetailed) return (date) => date.slice(0, 7)
  }
)

export const getDataToRender = createSelector(
  [
    getCurrentData,
    getCurrentMinValue,
    getCurrentMaxValue,
    getCurrentAggregationFunc,
    getSlicedDate
  ],
  (data, min, max, aggregation, slicedDate) => {
    const filteredData = data.filter(d => {
      const year = d.t.slice(0, 4)
      return (year >= min && year <= max)
    })
    return d3
      .nest()
      .key(d => slicedDate(d.t))
      .rollup(d => aggregation(d, g => g.v))
      .entries(filteredData)
  }
)
