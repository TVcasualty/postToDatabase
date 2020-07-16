import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';

export class NotFound extends Component {
	render() {
		return (
			<Jumbotron fluid>
				<Container fluid>
					<h1 className='display-3' block>
						You must log in to access KanyeDB
					</h1>
				</Container>
			</Jumbotron>
		);
	}
}

export default NotFound;
