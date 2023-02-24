import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
     reducer, 
     middleware: [...getDefaultMiddleware(), sagaMiddleware] 
}, composeWithDevTools);

sagaMiddleware.run(rootSaga)

export default store;