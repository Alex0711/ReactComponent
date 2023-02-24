import {takeLatest} from 'redux-saga/effects'

//Agrego el estado de usuarios para hacerlo un poco más completo,
//aunque no lo use en la aplicación
import tryUsersList from './users/list';
import tryProductsList from './products/list';
import { actionTypes as usersActions } from '../features/users';
import { actionTypes as productsActions } from '../features/products';

export default function* rootSaga() {
    yield takeLatest(usersActions.LIST_TRY, tryUsersList);
    yield takeLatest(productsActions.LIST_TRY, tryProductsList);
}