
import './App.css';
import './bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './containers/HomeScreen/index';
function App() {
  return (
	  <Router>
		<div className="App container">
			<Route path="/" component={HomeScreen}></Route>
	  	</div>
	  </Router>
    
  );
}

export default App;
