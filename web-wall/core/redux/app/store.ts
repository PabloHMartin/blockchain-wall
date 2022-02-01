import { configureStore } from "@reduxjs/toolkit";
import wallReducer from '../wall-slice';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from "../sagas/rootSaga";
import { createWrapper } from 'next-redux-wrapper';

const sagaMiddleware = createSagaMiddleware();


export const store = configureStore({
    reducer: {
        wall: wallReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(watcherSaga);

const makeStore = () => store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const wrapper = createWrapper(makeStore);
