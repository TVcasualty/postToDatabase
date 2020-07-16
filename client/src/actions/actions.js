import axios from 'axios';

export const ITEMS_LOADING = 'ITEMS_LOADING';
export const GET_ITEMS = 'GET_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const setItemsLoading = () => {
	return {
		type: ITEMS_LOADING,
	};
};

export const getItems = () => dispatch => {
	dispatch(setItemsLoading());
	axios.get('/api/items').then(res =>
		dispatch({
			type: GET_ITEMS,
			payload: res.data,
		}),
	);
};

export const deleteItem = id => dispatch => {
	axios.delete(`/api/items/${id}`).then(res =>
		dispatch({
			type: DELETE_ITEM,
			payload: id,
		}),
	);
};

export const addItem = item => dispatch => {
	axios.post('/api/items', item).then(res =>
		dispatch({
			type: ADD_ITEM,
			payload: res.data,
		}),
	);
};
