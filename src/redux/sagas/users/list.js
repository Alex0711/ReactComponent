import { call, put } from 'redux-saga/effects'
import instance from '../../instance/axios';
import { actionTypes as userActions } from '../../features/users';

export default function* tryUsersList() {
    try {
        const URL = 'https://jsonplaceholder.typicode.com/users'
        const response = yield call(instance(URL).get)
        const data = response.data

        yield put({ type: userActions.LIST_SUCCESS, data })
    } catch (e) {
        yield put({ type: userActions.LIST_FAILED })
    }
}