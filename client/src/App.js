import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import { Provider } from 'react-redux';
import store from './store';
import LoginButton from './auth/logIn';
import Main from './components/Main';
import NotFound from './components/NotFound';

const App = ({ location }) => {
	let mainComponent = '';
	switch (location) {
		case '':
			mainComponent = <LoginButton />;
			break;
		case 'callback':
			mainComponent = <Main />;
			break;
		default:
			mainComponent = <NotFound />;
	}
	return (
		<Provider store={store}>
			<div className='App'>
				<AppNavbar />
				{mainComponent}
			</div>
		</Provider>
	);
};

export default App;
