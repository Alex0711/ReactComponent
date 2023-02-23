import {combineReducers} from 'redux';

// import counterReducer, {NAME as counterName} from '../features/counter';
import usersReducer, {NAME as usersName} from '../users';

export default () => 
    combineReducers({
    // [counterName]: counterReducer,
    [usersName]: usersReducer,
});