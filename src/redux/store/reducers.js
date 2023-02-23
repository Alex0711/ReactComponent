import {combineReducers} from 'redux';

// import counterReducer, {NAME as counterName} from '../features/counter';
import usersReducer, {NAME as usersName} from '../features/users';
import productsReducer, {NAME as productsName } from '../features/products';

export default () => 
    combineReducers({
    // [counterName]: counterReducer,
    [usersName]: usersReducer,
    [productsName]: productsReducer,
});