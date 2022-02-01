import { call, put } from 'redux-saga/effects'
import { getAll, setMessages } from '../../wall-slice';
import { requestAddMessage, requestGetMessages } from '../requests/messages'

export function* handleMessages(action) {
    try {
        const messages = yield call(requestGetMessages);
        yield put(setMessages(messages));
    } catch (error) {
        console.log(error);
    }
}

export function* handleAddMessage(action) {
    try {
        console.log('message', action.payload);
        const msg = action.payload;
        yield call(requestAddMessage, msg);
        yield put(getAll());
    } catch (error) {
        console.log(error);
    }
}