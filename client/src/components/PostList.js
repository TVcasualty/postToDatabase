import React, { Component } from 'react';
import { Container, ListGroupItem, ListGroup, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
// import UpdateModal from './UpdateModal';

class PostList extends Component {
	componentDidMount() {
		this.props.getItems();
	}

	onDeleteClick = id => {
		this.props.deleteItem(id);
	};

	render() {
		const { items } = this.props.item;
		return (
			<Container>
				<ListGroup>
					{items.map(({ _id, name }) => (
						<ListGroupItem>
							<Button className='remove-button' color='danger' size='sm' onClick={this.onDeleteClick.bind(this, _id)}>
								X
							</Button>
							{name}
							{/* <UpdateModal /> */}
						</ListGroupItem>
					))}
				</ListGroup>
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	item: state.item,
});

export default connect(mapStateToProps, { getItems, deleteItem })(PostList);
