import { createSelector } from 'reselect'
// import { toArray } from 'immutable'
import * as d3 from 'd3'

import { getTemperature, getPrecipitation } from 'app/common/selectors/entities'
import { getCurrentMinValue, getCurrentMaxValue } from 'app/common/selectors/selection'

export const getCurrentTab = state => state.getIn(['dashboard', 'currentTab'])

export const getCurrentData = createSelector(
  [getTemperature, getPrecipitation, getCurrentTab],
  (temperature, precipitation, currentTab) => {
    if (currentTab === 'temperature') return temperature.toJS()
    if (currentTab === 'precipitation') return precipitation.toJS()
  }
)

// function test(data) {
//   console.log(data)
//   var nest = d3.nest()
//   .key(function(d) { return d.t.slice(0, 4)})
//   .rollup(function(d) {
//     return d3.sum(d, function(g) {return g.v; });
//   }).entries(data);

//   return d3
//     .nest()
//     .key(d => d.t.slice(0, 4))
//     .rollup(d => d3.sum(d, g => g.v))
//     .entries(filteredData)
// }

export const getDataToRender = createSelector(
  [getCurrentData, getCurrentMinValue, getCurrentMaxValue],
  (data, min, max) => {
    // test(data)
    const filteredData = data.filter(d => {
      const year = d.t.slice(0, 4)
      return (year >= min && year <= max)
    })
    return d3
      .nest()
      .key(d => d.t.slice(0, 4))
      .rollup(d => d3.max(d, g => g.v))
      .entries(filteredData)
  }
)
