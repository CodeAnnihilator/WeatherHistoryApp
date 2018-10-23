import { connect } from 'react-redux'

import ChartFilters from '../components/ChartFilters/ChartFilters'

import {
  switchAggregation,
  toggleIsDetailed
} from '../actions/dashboard'

import {
  getCurrentTab,
  getAggregation,
  getIsDetailed
} from '../selectors/dashboard'

import {
  getIsDetailedAvailable
} from 'app/common/selectors/selection'

const mapStateToProps = (state: any) => ({
  currentTab: getCurrentTab(state),
  aggregation: getAggregation(state),
  isDetailed: getIsDetailed(state),
  isDetailedAvailable: getIsDetailedAvailable(state)
})

const mapDispatchToProps = (dispatch: any) => ({
  switchAggregation: (aggregation): void => dispatch(switchAggregation(aggregation)),
  toggleIsDetailed: (): void => dispatch(toggleIsDetailed())
})

export default connect(mapStateToProps, mapDispatchToProps)(ChartFilters as any)