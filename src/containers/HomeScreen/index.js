
import React, {useState, useEffect} from 'react';
import { Form, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {fetchData, uploadUser, deleteUser} from './actions'

const HomeScreen = (props) =>{
	const [name, setName] = useState('')
	const [age, setAge] = useState('')
	const [editId, setEditId] = useState('')
	useEffect(() => {
		props.fetchData();
	},[]);
	const uploadUser= () =>{
		props.uploadUser(name, age, editId);
		clear();
	}
	const clear = () =>{
		setName('');
		setAge('');
		setEditId('');
	}
	const editUser = (user) =>{
		setName(user.name)
		setAge(user.age)
		setEditId(user._id)
	}
	return(
		<div className="container">
			<div className ="row justify-content-center">
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) =>setName(e.target.value)} />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Label>Age</Form.Label>
						<Form.Control type="text" placeholder="age" value={age} onChange={(e) =>setAge(e.target.value)}/>
					</Form.Group>
					<Button variant="primary ml-3 mr-3" onClick={clear}>
						Cancel
					</Button>
					<Button variant="primary ml-3" onClick={uploadUser}>
						Submit
					</Button>
				</Form>
			</div>
			<ul className ="list-group mt-3">
			{props.users.map(ele =>{
				return(<li className="list-group-item" key={ele._id}>Name: {ele.name} - Age: {ele.age}  <i className="far fa-trash-alt" onClick={() =>props.deleteUser(ele._id)}></i> <i className="fas fa-edit" onClick={() =>editUser(ele)}></i></li>)
			})}
			</ul>
		</div>
	)
}

const mapStateToProps = (state) =>{
   return{
	   users: state.fetchDataReducer.users,
	   error: state.fetchDataReducer.error
   }
}

const mapDispatchToProps = (dispatch) =>{
   return{
	   fetchData: () =>{
		   dispatch(fetchData())
	   },
	   uploadUser: (name, age, editId) =>{
		   dispatch(uploadUser(name, age, editId))
	   },
	   deleteUser: (id) =>{
		   dispatch(deleteUser(id))
	   }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)