import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import { Provider } from 'react-redux';
import store from './store';
import PostList from './components/PostList';
import ItemModal from './components/ItemModal';

const App = () => {
	return (
		<Provider store={store}>
			<AppNavbar />
			<ItemModal />
			<PostList />
		</Provider>
	);
};

export default App;
