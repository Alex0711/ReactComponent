import {takeLatest} from 'redux-saga/effects'
// import {actionTypes as usersActions} from '../features/users';

import tryUsersList from './users/list';
import { actionTypes as userActions } from './../users';

export default function* rootSaga() {
    yield takeLatest(userActions.LIST_TRY, tryUsersList);
    // yield takeLatest('TRY_LIST', tryUsersList);
    // yield takeLatest('TRY_LIST', tryUsersList);
    // yield takeLatest('TRY_LIST', tryUsersList);
}