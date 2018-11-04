import * as React from 'react'
import ResizeObserver from 'resize-observer-polyfill'

import SubHeader from 'app/common/components/SubHeader/SubHeader'
import Chart from 'app/common/components/Chart/Chart'
import Preloader from 'app/common/components/Preloader/Preloader'

import DataRangeScrollContainer from './containers/dataRangeScroll'
import ButtonSwitcherContainer from './containers/buttonSwitcher'
import ChartFilters from './containers/chartFilters'

interface IDashboardProps {
  requestTemperature: Function
  requestPrecipitation: Function
  switchTab: Function
  data: string[]
  currentTab: string
  isDataLoaded: boolean
  dataToRequest: string
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

    const {
      isDataLoaded,
      currentTab,
      requestTemperature,
      requestPrecipitation
    } = this.props

    if (isDataLoaded) return

    if(currentTab === 'temperature') {
      requestTemperature()
    } else {
      requestPrecipitation()
    }
  }

  componentWillReceiveProps(nextProps) {
    const { requestPrecipitation, requestTemperature } = this.props
    const { dataToRequest } = nextProps
    if (nextProps.currentTab !== this.props.currentTab) {
      if (dataToRequest === 'temperature') return requestTemperature()
      if (dataToRequest === 'precipitation') return requestPrecipitation()
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
    const { data, isDataLoaded } = this.props
    return (
      <div ref='main' style={{ flex: 1 }}>
        { !isDataLoaded && <Preloader /> }
        {
          isDataLoaded && (
            <div>
              <DataRangeScrollContainer />
              <SubHeader text='data render' backgroundColor='white' />
              <ButtonSwitcherContainer />
              <SubHeader text='data filter' backgroundColor='white' />
              <ChartFilters />
              <SubHeader text='chart' backgroundColor='white' />
              { data.length !== 0 && <Chart width={chartWidth} data={data} /> }
            </div>
          )
        }
      </div>
    )
  }
}