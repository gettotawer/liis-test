import { takeEvery, put } from 'redux-saga/effects'
import { GET_HOTELS_ARRAY } from '../../consts/constActions';
import { getHotelsArray } from '../actions/actionCreator';
import hotelsApi from '../../utils/Api';


export function* workerSaga() {
    // hotelsApi.getHotels('Москва', '2023-03-03', '2023-03-03')
    console.log(hotelsApi.getHotels('Москва', '2023-03-03', '2023-03-03'))
}

export function* watchFetchSaga() {
    yield takeEvery(GET_HOTELS_ARRAY, workerSaga)
}

export default function* rootSaga() {
    yield watchFetchSaga();
}