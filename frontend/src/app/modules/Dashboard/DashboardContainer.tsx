import { connect } from 'react-redux'

import { requestTemperature } from 'app/common/actions/entities'
import { getTemperature, isDataLoaded } from 'app/common/selectors/entities'

import Dashboard from './Dashboard'

const mapStateToProps = (state: any) => ({
  temperature: getTemperature(state),
  isDataLoaded: isDataLoaded(state)
})

const mapDispatchToProps = (dispatch: any) => ({
  requestTemperature: (): void => dispatch(requestTemperature())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
