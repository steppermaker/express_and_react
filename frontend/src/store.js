import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { createPromise } from 'redux-promise-middleware';
import createSagaMiddleware from 'redux-saga';

import reducer from "./reducers";
import rootSaga from './sagas';

const promise = createPromise({ types: { fulfilled: 'success' } });
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(promise, sagaMiddleware, thunk, createLogger());

export default createStore(reducer, middleware);
sagaMiddleware.run(rootSaga);