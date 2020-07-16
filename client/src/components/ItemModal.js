import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

const ItemModal = ({ addItem }) => {
	const [modal, setModal] = useState(false);
	const [name, setName] = useState('');

	const handleToggle = () => setModal(!modal);

	const handleChangeName = e => setName(e.target.value);

	const handleOnSubmit = e => {
		e.preventDefault();

		const newItem = {
			name,
		};
		addItem(newItem);
		handleToggle();
	};

	return (
		<div>
			<Button color='dark' className='space-around' onClick={handleToggle}>
				Add Quote
			</Button>

			<Modal isOpen={modal} toggle={handleToggle}>
				<ModalHeader toggle={handleToggle}>Add a quote to the list</ModalHeader>
				<ModalBody>
					<Form onSubmit={handleOnSubmit}>
						<FormGroup>
							{/* <Label for='item'>Item</Label> */}
							<Input type='text' name='name' id='item' placeholder='type quote here' onChange={handleChangeName} />
							<Button color='dark' className='space-around' block>
								Add
							</Button>
						</FormGroup>
					</Form>
				</ModalBody>
			</Modal>
		</div>
	);
};

const mapStateToProps = state => ({
	item: state.item,
});

export default connect(mapStateToProps, { addItem })(ItemModal);
