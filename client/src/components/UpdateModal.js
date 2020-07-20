// import React, { useState } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Container } from 'reactstrap';
// import { connect } from 'react-redux';
// import { addItem } from '../actions/itemActions';

// const UpdateModal = ({ addItem }) => {
// 	const [modal, setModal] = useState(false);
// 	const [name, setName] = useState('');

// 	const handleToggle = () => setModal(!modal);

// 	const handleChangeName = e => setName(e.target.value);

// 	const handleOnSubmit = e => {
// 		e.preventDefault();

// 		const newItem = {
// 			name,
// 		};
// 		addItem(newItem);
// 		handleToggle();
// 	};

// 	return (
// 		<Container>
// 			<Button outline color='info' size='sm' block onClick={handleToggle}>
// 				update
// 			</Button>

// 			<Modal isOpen={modal} toggle={handleToggle}>
// 				<ModalHeader toggle={handleToggle}>Add a post</ModalHeader>
// 				<ModalBody>
// 					<Form onSubmit={handleOnSubmit}>
// 						<FormGroup>
// 							<Input type='text' name='name' id='item' placeholder='type your post here' onChange={handleChangeName} />
// 							<Button color='info' className='space-around' block>
// 								Add
// 							</Button>
// 						</FormGroup>
// 					</Form>
// 				</ModalBody>
// 			</Modal>
// 		</Container>
// 	);
// };

// const mapStateToProps = state => ({
// 	item: state.item,
// });

// export default connect(mapStateToProps, { addItem })(UpdateModal);
