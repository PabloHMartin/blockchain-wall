import { all, takeLatest } from 'redux-saga/effects';
import { addOne, getAll } from '../wall-slice';
import { handleAddMessage, handleMessages } from './handlers/handleMessages';

export function* watcherSaga() {
    yield all([
        takeLatest(addOne, handleAddMessage),
        takeLatest(getAll, handleMessages),
    ])
}