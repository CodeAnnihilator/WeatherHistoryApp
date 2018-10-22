import * as d3 from 'd3'
import cn from 'classnames'

import initialProperties from './initialProperties'
import { drawOnMouseOver, clearOnMouseOut } from './mouseEvents'

export default function d3ResizeChart(root, data, styles, isWidthChanged) {
  const values = initialProperties(root, data)
  const { width, xAxis, yAxis, line, x, y, barWidth, height, margin } = values

  const chart = root.attr('width', width)

  chart
    .selectAll(`.${styles.line}`)
    .selectAll('path')
    .each(function(d) {
      if (!isWidthChanged) {
        d3.select(this)
          .transition()
          .attr('d', line(data))
      } else {
        d3.select(this)
          .attr('d', line(data))
      }
    })

  chart
    .selectAll(`.${styles.overlay}`)
    .selectAll('path')
    .each(function(d) {
      const lineValues = line(data).slice(1);
      const splitedValues = lineValues.split(',')
      const attrD = `M0,${height - 50},${lineValues},l0,${(height -50) - splitedValues[splitedValues.length - 1]}`
      if (!isWidthChanged) {
        d3.select(this)
          .transition()
          .attr('d', attrD)
      } else {
        d3.select(this)
          .attr('d', attrD)
      }
    })

  chart
    .selectAll(`.${styles.xAxis}`)
    .call(xAxis)

  chart
    .selectAll(`.${styles.yAxis}`)
    .transition()
    .call(yAxis)

  chart
    .selectAll('circle')
    .data(data)
    .attr('cx', (d, i) => x(new Date(d.t.replace("-", "/"))))
    .attr('cy', (d, i) => y(d.v))

  chart
    .selectAll(`.${cn(styles.hoverLine)}`)
    .data(data)
    .attr('height', (d) => (height - y(d.v) - margin.top - margin.bottom))
    .attr('x', (d, i) => (x(new Date(d.t.replace("-", "/"))) - 2 / 2))
    .attr('y', (d, i) => (y(d.v) + 3))

  chart
    .selectAll(`.${cn(styles.hoverBox)}`)
    .attr('width', barWidth)
    .data(data)
    .attr('height', (d) => (height - y(d.v) - margin.top - margin.bottom))
    .attr('x', (d, i) => (x(new Date(d.t.replace("-", "/"))) - barWidth / 2))
    .attr('y', (d, i) => y(d.v))
    .on('mouseover', (d, i) => drawOnMouseOver(root, d, x, y, i, styles))
    .on('mouseout', (d, i) => clearOnMouseOut(d, x, i, styles))
}