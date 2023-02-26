import { combineReducers } from '@reduxjs/toolkit';
import settings from './settings';
import favorites from './favotites';
import hotels from './hotels';
import user from './user';

const reducer = combineReducers({
    settings,
    hotels,
    favorites,
    user
});

export default reducer;
