import {SEND_REQUEST, SEND_REQUEST_SUCCESS, SEND_REQUEST_FAILURE, UPLOAD_USER, DELETE_USER, UPDATE_DELETED_USER} from './constants'

export function fetchData(){
	return{
		type: SEND_REQUEST,
	}
}

export function fetchDataSuccess(users){
	return{
		type: SEND_REQUEST_SUCCESS,
		payload: users
	}
}

export function fetchDataFailure(error){
	return{
		type: SEND_REQUEST_FAILURE,
		payload: {},
		error: error
	}
}

export function uploadUser(name, age, editId){
	return{
		type: UPLOAD_USER,
		name, age, editId
	}
}

export function getAllUser(){
	return{
		type: SEND_REQUEST,
	}
}

export function deleteUser(id){
	return{
		type: DELETE_USER,
		id
	}
}

export function updateDeletedUser(userInfo){
	return{
		type: UPDATE_DELETED_USER,
		userInfo
	}
}
