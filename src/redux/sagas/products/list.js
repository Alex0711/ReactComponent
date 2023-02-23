import { call, put } from 'redux-saga/effects'

import { actionTypes as productActions } from '../../features/products';

export default function* tryProductsList() {
    try {
        const URL = 'https://api.escuelajs.co/api/v1/products'
        const response = yield call(fetch, URL)
        const data = yield call([response, 'json'])

        yield put({ type: productActions.LIST_SUCCESS, data })
    } catch (e) {
        yield put({ type: productActions.LIST_FAILED })
    }
}