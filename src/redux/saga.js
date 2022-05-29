import { takeLatest, all, put, fork, call } from 'redux-saga/effects';
import { fetchProject } from './api';
import * as types from './actionType';

export function* returnProject(action) {
	try {
		const response = yield call(fetchProject);
		yield put({ type: types.PROJECT.success, payload: response.data.project });
	} catch (err) {
		yield put({ type: types.PROJECT.err, payload: err });
	}
}
export function* callProject() {
	yield takeLatest(types.PROJECT.start, returnProject);
}
// saga
export default function* rootSaga() {
	yield all([fork(callProject)]);
}
