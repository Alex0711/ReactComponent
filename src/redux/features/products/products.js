import {createStructuredSelector} from 'reselect';

export const NAME = 'products';

// Action Types
const LIST_TRY = '[products]/LIST_TRY';
const LIST_SUCCESS = '[products]/LIST_SUCCESS';
const LIST_FAILED = '[products]/LIST_FAILED';

// Initial State:
const initialState = {
    dataList: [],
    isLoading: false,
}

// REDUCER:
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case actionTypes.LIST_TRY:
            return { ...state, isLoading: true }
        case actionTypes.LIST_FAILED:
            return { ...state, isLoading: false }
        case actionTypes.LIST_SUCCESS:
            return { ...state, isLoading: false, dataList: action.data }
        default:
            return state
    }
}

function list() {
    return {type: LIST_TRY}
}

const products = (state) => state[NAME];

export const selector = createStructuredSelector({
    products,
})

export const actionCreators = {
    list,
}

export const actionTypes = {
    LIST_TRY,
    LIST_FAILED,
    LIST_SUCCESS,
}
