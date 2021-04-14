import {all} from 'redux-saga/effects';

import {fetchDataSaga} from './containers/HomeScreen/saga';

export default function* RootSaga(){
	yield all([
		fetchDataSaga()
	])
}
