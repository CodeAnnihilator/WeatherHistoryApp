import * as d3 from 'd3'
import cn from 'classnames'

function defineInitialProperties(root, data) {

  const rootBoundings = root.node().getBoundingClientRect()
  const width = rootBoundings.width
  const barWidth = width / data.length
  const height = 500

  const margin = {
    top: 20,
    right: 30,
    bottom: 30,
    left: 60
  }

  const xExtents = d3.extent(data, (d) => new Date(d.t))
  const yExtents = d3.extent(data, (d) => d.v)

  const x = d3
    .scaleTime()
    .domain([xExtents[0], xExtents[1]])
    .range([0, width - margin.left - margin.right])
    .nice()

  const y = d3
    .scaleLinear()
    .domain([yExtents[0], yExtents[1]])
    .range([height - margin.top - margin.bottom, 0])

  const xAxis = d3
    .axisBottom(x)
    .tickSize(4)
    .tickPadding(10)
    .tickSizeOuter(0)

  const yAxis = d3
    .axisLeft(y)
    .tickSize(4)
    .tickPadding(10)
    .tickSizeOuter(0)

  const line = d3.line()
    .curve(d3.curveMonotoneX)
    .x((d) => x(new Date(d.t)))
    .y((d) => y(d.v))

  return { width, height, margin, xAxis, yAxis, line, x, y, barWidth, rootBoundings }
}

function drawOnMouseOver(root, d, x, y, i, styles) {
  const rootBoundings = root.node().getBoundingClientRect()
  const xtranslate = x(new Date(d.t))
  d3.selectAll(`.${cn(styles.tooltip)}`)
    .style('opacity', 1)
    .style('left', x(new Date(d.t)) + rootBoundings.left - 10 + 'px')
    .style('top', y(d.v) + rootBoundings.top - 58 + 'px')
    .html(`
      <div>
        <span>date: <strong>${d.t}</strong></span>
        <span>value: <strong>${d.v}</strong></span>
      </div>
    `)
  const currentLine = '#line-' + i
  d3.select(currentLine).style('opacity', 1)

  const currentDot = '#dot-' + i
  d3.select(currentDot).style('opacity', 1)

  d3.selectAll(`g[transform = "translate(${xtranslate}, 0)"]`)
    .select('text')
    .style('opacity', 1)
}

function clearOnMouseOut(d, x, i, styles) {
  const xtranslate = x(new Date(d.t))

  d3.selectAll(`.${cn(styles.tooltip)}`).style('opacity', 0)

  const currentLine = '#line-' + i
  d3.select(currentLine).style('opacity', 0)

  const currentDot = '#dot-' + i
  d3.select(currentDot).style('opacity', 0)

  d3.selectAll(`g[transform = "translate(${xtranslate}, 0)"]`)
    .select('text[style = "text-anchor: middle; opacity: 1;"]')
    .style('opacity', 0)
}

export function d3DrawChart(root, data, styles) {
  const values = defineInitialProperties(root, data)
  const { width, height, margin, xAxis, yAxis, line, x, y, barWidth } = values

  const chart = root
    .attr('class', styles.lineChart)
    .attr('width', width)
    .attr('height', height )
    .append('g')
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')

  chart
    .append('g')
    .attr('class', styles.xAxis)
    .attr('transform', 'translate(0, ' + (height - margin.top - margin.bottom) + ')')
    .call(xAxis)

  chart
    .append('g')
    .attr('class', styles.yAxis).attr('transform', 'translate(0,0)')
    .call(yAxis)

  chart.append('g')
    .attr('class', styles.line)
    .selectAll('path')
    .data([data])
    .enter()
    .append('path')
    .attr('d', line)

  d3
    .select('body')
    .append('div')
    .attr('class', cn(styles.lineChart, styles.tooltip))
    .style('opacity', 0)
    .style('top', 0)

  chart
    .selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('id', (d, i) => ('dot-' + i))
    .attr('cx', (d, i) => x(new Date(d.t)))
    .attr('cy', (d, i) => y(d.v))
    .attr('r', 4)
    .style('opacity', 0)

  chart
    .selectAll('rect.hover-line')
    .data(data)
    .enter()
    .append('rect')
    .style('opacity', 0)
    .attr('width', 2)
    .attr('class', cn(styles.lineChart, styles.hoverLine))
    .attr('id', (d, i) => ('line-' + i))
    .attr('height', (d) => (height - y(d.v) - margin.top - margin.bottom))
    .attr('x', (d, i) => (x(new Date(d.t)) - 2 / 2))
    .attr('y', (d, i) => (y(d.v) + 3))


  chart
    .selectAll('rect.hover-box')
    .data(data)
    .enter()
    .append('rect')
    .style('opacity', 0)
    .attr('class', cn(styles.lineChart, styles.hoverBox))
    .attr('width', barWidth)
    .attr('height', (d) => (height - y(d.v) - margin.top - margin.bottom))
    .attr('x', (d, i) => (x(new Date(d.t)) - barWidth / 2))
    .attr('y', (d, i) => y(d.v))
    .on('mouseover', (d, i) => drawOnMouseOver(root, d, x, y, i, styles))
    .on('mouseout', (d, i) => clearOnMouseOut(d, x, i, styles))
}

export function d3ResizeChart(root, data, styles) {
  const values = defineInitialProperties(root, data)
  const { width, xAxis, yAxis, line, x, y, barWidth, height, margin } = values

  const chart = root.attr('width', width)

  chart
    .selectAll(`.${styles.line}`)
    .selectAll('path')
    .attr('d', line)

  chart
    .selectAll(`.${styles.xAxis}`)
    .call(xAxis)

  chart
    .selectAll(`.${styles.yAxis}`)
    .call(yAxis)

  chart
    .selectAll('circle')
    .attr('cx', (d, i) => x(new Date(d.t)))
    .attr('cy', (d, i) => y(d.v))

  chart
    .selectAll(`.${cn(styles.hoverLine)}`)
    .attr('x', (d, i) => (x(new Date(d.t)) - 2 / 2))
    .attr('y', (d, i) => (y(d.v) + 3))

  chart
    .selectAll(`.${cn(styles.hoverBox)}`)
    .attr('width', barWidth)
    .attr('height', (d) => (height - y(d.v) - margin.top - margin.bottom))
    .attr('x', (d, i) => (x(new Date(d.t)) - barWidth / 2))
    .attr('y', (d, i) => y(d.v))
    .on('mouseover', (d, i) => drawOnMouseOver(root, d, x, y, i, styles))
    .on('mouseout', (d, i) => clearOnMouseOut(d, x, i, styles))
}