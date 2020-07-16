import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'reactstrap';

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<Button onClick={() => loginWithRedirect()} color='info' size='lg' block>
			Log In
		</Button>
	);
};

export default LoginButton;
