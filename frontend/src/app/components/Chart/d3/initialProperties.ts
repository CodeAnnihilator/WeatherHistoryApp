import * as d3 from 'd3'

export default function initialProperties(root, data) {

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

  const xExtents = d3.extent(data, (d) => new Date(d.key.replace("-", "/")))
  const yExtents = d3.extent(data, (d) => d.value)

  const x = d3
    .scaleTime()
    .domain([xExtents[0], xExtents[1]])
    .range([0, width - margin.left - margin.right])
    // .nice()

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
  // .curve(d3.curveMonotoneX)
  .x((d) => x(new Date(d.key.replace("-", "/"))))
  .y((d) => y(d.value))

  return { width, height, margin, xAxis, yAxis, line, x, y, barWidth, rootBoundings }
}