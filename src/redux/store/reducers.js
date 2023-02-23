import {combineReducers} from 'redux';

import cartReducer, {NAME as cartName} from '../features/cart';
import usersReducer, {NAME as usersName} from '../features/users';
import productsReducer, {NAME as productsName } from '../features/products';

export default () => 
    combineReducers({
    [cartName]: cartReducer,
    [usersName]: usersReducer,
    [productsName]: productsReducer,
});