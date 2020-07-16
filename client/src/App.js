import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import QuoteList from './components/QuoteList';
import { Provider } from 'react-redux';
import store from './store';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<AppNavbar />
				<Container>
					<ItemModal />
					<QuoteList />
				</Container>
			</div>
		</Provider>
	);
}

export default App;
