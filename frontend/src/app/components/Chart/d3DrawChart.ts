import * as d3 from 'd3'

export function d3DrawChart(root, data, styles) {
  const rootBoundings = root.node().getBoundingClientRect()
  const chartWidth = rootBoundings.width
  const chartHeight = 500
  const margin = { top: 20, right: 30, bottom: 30, left: 60 }

  const xExtents = d3.extent(data, function(d) {
    return new Date(d.t)
  })

  const yExtents = d3.extent(data, function(d) {
    return d.v
  })

  const x = d3
    .scaleTime()
    .domain([xExtents[0], xExtents[1]])
    .range([0, chartWidth - margin.left - margin.right])
    .nice()

  const y = d3
    .scaleLinear()
    .domain([yExtents[0], yExtents[1]])
    .range([chartHeight - margin.top - margin.bottom, 0])

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

  const line = d3.line().curve(d3.curveBasis)
    .x((d) => x(new Date(d.t)))
    .y((d) => y(d.v))

  const chart = root
    .attr('class', styles.lineChart)
    .attr('width', chartWidth)
    .attr('height', chartHeight )
    .append('g')
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')

  chart
    .append('g')
    .attr('class', styles.xAxis)
    .attr('transform', 'translate(0, ' + (chartHeight - margin.top - margin.bottom) + ')')
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
}

export function d3ResizeChart(root, data, styles) {
  const rootBoundings = root.node().getBoundingClientRect()
  const chartWidth = rootBoundings.width
  const chartHeight = 500
  const margin = { top: 20, right: 30, bottom: 30, left: 60 }

  const xExtents = d3.extent(data, function(d) {
    return new Date(d.t)
  })

  const yExtents = d3.extent(data, function(d) {
    return d.v
  })

  const x = d3
    .scaleTime()
    .domain([xExtents[0], xExtents[1]])
    .range([0, chartWidth - margin.left - margin.right])

  const y = d3
    .scaleLinear()
    .domain([yExtents[0], yExtents[1]])
    .range([chartHeight - margin.top - margin.bottom, 0])

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

  const line = d3.line().curve(d3.curveBasis)
    .x((d) => x(new Date(d.t)))
    .y((d) => y(d.v))

  const chart = root.attr('width', chartWidth)

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
}