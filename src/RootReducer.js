import {combineReducers} from 'redux'
import fetchDataReducer from './containers/HomeScreen/reducer'

const RootReducer = combineReducers({
	fetchDataReducer
})

export default RootReducer;