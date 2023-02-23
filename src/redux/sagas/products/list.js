import { call, put } from 'redux-saga/effects'
import instance from '../../instance/axios';
import { actionTypes as productActions } from '../../features/products';

export default function* tryProductsList() {
    try {
        const URL = 'https://api.escuelajs.co/api/v1/products'
        const response = yield call(instance(URL).get)
        const data = response.data

        yield put({ type: productActions.LIST_SUCCESS, data })
    } catch (e) {
        yield put({ type: productActions.LIST_FAILED })
    }
}