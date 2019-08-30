import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './userReducer';

const AppReducers = combineReducers({
    userReducer,
})

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;