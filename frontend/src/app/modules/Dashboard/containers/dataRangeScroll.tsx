import { connect } from 'react-redux'

import DataRangeScroll from '../components/DataRangeScroll/DataRangeScroll'

import { changeSelectionValues } from 'app/common/actions/selection'

import {
  getMinValue,
  getMaxValue,
  getCurrentMinValue,
  getCurrentMaxValue
} from 'app/common/selectors/selection'

const mapStateToProps = (state: any) => ({
  minValue: getMinValue(state),
  maxValue: getMaxValue(state),
  currentMinValue: getCurrentMinValue(state),
  currentMaxValue: getCurrentMaxValue(state)
})

const mapDispatchToProps = (dispatch: any) => ({
  handleChange: (values): void => dispatch(changeSelectionValues(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(DataRangeScroll as any)