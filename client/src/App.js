import React from 'react';
import './styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom'

import AppRouter from './components/routes/router'


function App() {
	return (
		<Router>
			<AppRouter />
		</Router>
	);
}

export default App;
