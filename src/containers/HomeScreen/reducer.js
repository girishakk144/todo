import {SEND_REQUEST, SEND_REQUEST_SUCCESS, SEND_REQUEST_FAILURE, UPDATE_DELETED_USER} from './constants'
const initialState ={
	loading: false,
	users: [],
	error: {}
}

const fetchDataReducer = (state = initialState, action) =>{
	switch(action.type){
		case SEND_REQUEST:
			return{
				...state,
				loading: true
			}
		case SEND_REQUEST_SUCCESS:
			return{
				...state,
				loading: false,
				users: action.payload,
				error: {}
			}
		case SEND_REQUEST_FAILURE:
			return{
				...state,
				loading: false,
				users: [],
				error: action.error
			}
		case UPDATE_DELETED_USER:
			const users = state.users;
			console.log(action.userInfo)
			const list = users.filter(user => user._id !== action.userInfo.data._id)
			console.log(list)
			return{
				...state,
				users: list,
			}
		default:{
			return{ ...state}
		}
	}
}

export default fetchDataReducer;