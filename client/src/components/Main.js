import React, { Component } from 'react';
import QuoteList from './QuoteList';
import ItemModal from './ItemModal';
import LogoutButton from '../auth/logOut';
import { Container } from 'reactstrap';

export class Main extends Component {
	render() {
		return (
			<Container>
				<LogoutButton />
				<ItemModal />
				<QuoteList />
			</Container>
		);
	}
}

export default Main;
