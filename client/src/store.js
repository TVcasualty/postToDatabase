import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleWare = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// eslint-disable-next-line
interface Window {
	__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleWare)));

export default store;
