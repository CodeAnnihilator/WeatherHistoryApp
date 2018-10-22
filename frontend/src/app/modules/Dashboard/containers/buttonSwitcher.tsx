import { connect } from 'react-redux'

import ButtonSwitcher from '../components/ButtonSwitcher/ButtonSwitcher'

import { switchTab } from '../actions/dashboard'
import { getCurrentTab } from '../selectors/dashboard'

const mapStateToProps = (state: any) => ({
  currentTab: getCurrentTab(state)
})

const mapDispatchToProps = (dispatch: any) => ({
  onSwitch: (nextTab): void => dispatch(switchTab(nextTab))
})

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSwitcher as any)