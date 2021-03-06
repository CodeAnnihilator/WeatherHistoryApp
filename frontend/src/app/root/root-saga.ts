import { all, fork } from 'redux-saga/effects'

import watchEntities from 'app/common/sagas/entities'

export default function* rootSaga() {
  yield all([
    fork(watchEntities)
  ])
}