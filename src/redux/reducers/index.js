import { combineReducers } from '@reduxjs/toolkit';
import { settings } from './settings';
import hotels from './hotels';

const reducer = combineReducers({
    settings,
    hotels
});

export default reducer;
