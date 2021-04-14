import {takeEvery, call, put} from 'redux-saga/effects'
import {SEND_REQUEST, UPLOAD_USER, DELETE_USER} from './constants'
import axios from 'axios';
import {fetchDataSuccess, getAllUser, updateDeletedUser} from './actions';

function* asyncFetchRequest(){
	const url = `https://todo-kk.herokuapp.com/api/users`
	try {
		const response =  yield call(() =>axios.get(url))
		yield put(fetchDataSuccess(response.data))
	} catch (error) {
		console.log(error)
	}
}

function* uploadUser(data){
	const url = data.editId ? `https://todo-kk.herokuapp.com/api/users/${data.editId}` : `https://todo-kk.herokuapp.com/api/users`;
	const payload = {name: data.name, age: data.age}
	try {
		if(!data.editId)
		yield call(() =>axios.post(url, payload))
		else
		yield call(() => axios.put(url, payload))
		yield put(getAllUser())
	} catch (error) {
		console.log(error)
	}
}

function* deleteUser(data){
	const url = `https://todo-kk.herokuapp.com/api/users/${data.id}`;
	try {
		const response =  yield call(() =>axios.delete(url))
		yield put(updateDeletedUser(response))
	} catch (error) {
		console.log(error)
	}
}


export function* fetchDataSaga(){
	yield takeEvery( SEND_REQUEST, asyncFetchRequest)
	yield takeEvery( UPLOAD_USER, uploadUser)
	yield takeEvery( DELETE_USER, deleteUser)
}