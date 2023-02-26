import { takeEvery, put, call, select } from 'redux-saga/effects'
import { GET_HOTELS_ARRAY } from '../../consts/constActions';
import { setHotelsArray } from '../actions/actionCreator';
import hotelsApi from '../../utils/Api';

export function* workerSaga() {
    const store = yield select(s => s)

    const hotels = yield call(() => hotelsApi.getHotels(store.settings.city, store.settings.date, store.settings.leavingDate)
        .then((res) => res)
        .catch((err) => {
            console.log(err)
            return []
        }))
    yield put(setHotelsArray(hotels))
}

export function* watchFetchSaga() {
    yield takeEvery(GET_HOTELS_ARRAY, workerSaga)
}

export default function* rootSaga() {
    yield watchFetchSaga();
}