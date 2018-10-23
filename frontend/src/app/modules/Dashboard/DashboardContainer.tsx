import { connect } from 'react-redux'

import {
  requestTemperature,
  requestPrecipitation
} from 'app/common/actions/entities'

import {
  getDataToRender,
  getCurrentTab
} from './selectors/dashboard'

import Dashboard from './Dashboard'

const mapStateToProps = (state: any) => ({
  data: getDataToRender(state),
  currentTab: getCurrentTab(state),
})

const mapDispatchToProps = (dispatch: any) => ({
  requestTemperature: (): void => dispatch(requestTemperature()),
  requestPrecipitation: (): void => dispatch(requestPrecipitation())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
