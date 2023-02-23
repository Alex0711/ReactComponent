import {takeLatest} from 'redux-saga/effects'

import tryUsersList from './users/list';
import tryProductsList from './products/list';
import { actionTypes as usersActions } from '../features/users';
import { actionTypes as productsActions } from '../features/products';


export default function* rootSaga() {
    yield takeLatest(usersActions.LIST_TRY, tryUsersList);
    yield takeLatest(productsActions.LIST_TRY, tryProductsList);
    // yield takeLatest('TRY_LIST', tryUsersList);
    // yield takeLatest('TRY_LIST', tryUsersList);
}