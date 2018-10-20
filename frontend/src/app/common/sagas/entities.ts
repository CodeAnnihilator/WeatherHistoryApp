import { takeLatest, call, put } from 'redux-saga/effects'
import { fromJS } from 'immutable'

import { actionTypes as at } from '../constants/entities'

import { requestTemperatureSuccess } from 'app/common/actions/entities'

import {
  requestTemperature
} from 'app/api/temperature'

function* requestTemperatureSaga() {
  try {
    const { data } = yield call(requestTemperature)
    yield put(requestTemperatureSuccess(fromJS(data)))
  } catch(err) {
    console.log(err)
  }
}

export default function* watchRequestEntities() {
  yield takeLatest(at.REQUEST_TEMPERATURE, requestTemperatureSaga)
}
