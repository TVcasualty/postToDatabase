import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

let state = {};

window.setState = changes => {
	state = Object.assign({}, state, changes);
	ReactDOM.render(
		<Auth0Provider
			domain='dev-ns1-lcfs.us.auth0.com'
			clientId='60ZBQ41B330Czp5LfanjHiIJ7iS6LHfn'
			redirectUri='http://localhost:3000/callback'
			audience='https://dev-ns1-lcfs.us.auth0.com/userinfo'
			responseType='token id_token'
			scope='openid'>
			<App {...state} />
		</Auth0Provider>,
		document.getElementById('root'),
	);
};

/* eslint no-restricted-globals:0*/
let initialState = {
	name: 'joe',
	location: location.pathname.replace(/^\/?|\/$/g, ''),
};

window.setState(initialState);
