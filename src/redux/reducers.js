import { combineReducers } from 'redux';
import * as types from './actionType';

const projectReducer = (state = { project: [] }, action) => {
	switch (action.type) {
		case types.PROJECT.start:
			return { ...state };
		case types.PROJECT.success:
			return { ...state, project: action.payload };
		case types.PROJECT.error:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};
const reducers = combineReducers({
	projectReducer,
});

export default reducers;
