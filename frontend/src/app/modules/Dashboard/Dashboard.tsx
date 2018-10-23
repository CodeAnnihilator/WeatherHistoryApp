import * as React from 'react'
import ResizeObserver from 'resize-observer-polyfill'

import SubHeader from 'app/components/SubHeader/SubHeader'
import Chart from 'app/components/Chart/Chart'

import DataRangeScrollContainer from './containers/dataRangeScroll'
import ButtonSwitcherContainer from './containers/buttonSwitcher'
import ChartFilters from './containers/chartFilters'

interface IDashboardProps {
  requestTemperature: Function
  requestPrecipitation: Function
  switchTab: Function
  data: string[]
  currentTab: string
}

interface IDashboardState {
  chartWidth: number
  observe: Function
  unobserve: Function
}

export default class Dashboard extends React.Component<IDashboardProps, IDashboardState> {

  constructor(props: any){
    super(props)
    this.state = {
      chartWidth: null,
      observe: null,
      unobserve: null
    }
  }

  public refs: {
    main: HTMLInputElement
  }

  componentWillMount() {
    if(this.props.currentTab === 'temperature') {
      this.props.requestTemperature()
    } else {
      this.props.requestPrecipitation()
    }
  }

  componentDidMount() {
    const observer = new ResizeObserver(e => this.setState({ chartWidth: e[0].contentRect.width }))
    this.setState({
      observe: () => observer.observe(this.refs.main),
      unobserve: () => observer.unobserve(this.refs.main)
    })
    observer.observe(this.refs.main)
  }

  componentWillUnmount() {
    const { unobserve } = this.state
    unobserve(this.refs.main)
  }

  render(): React.ReactElement<{}> {
    const { chartWidth } = this.state
    const { data } = this.props
    return (
      <div ref='main'>
        <SubHeader text='years range' backgroundColor='white'  />
        { !data.length && 'Loading data...' }
        {
          data.length !== 0 && (
            <div>
              <DataRangeScrollContainer />
              <SubHeader text='data render' backgroundColor='white' />
              <ButtonSwitcherContainer />
              <SubHeader text='data filter' backgroundColor='white' />
              <ChartFilters />
              <SubHeader text='chart' backgroundColor='white' />
              <Chart width={chartWidth} data={data} />
            </div>
          )
        }
      </div>
    )
  }
}