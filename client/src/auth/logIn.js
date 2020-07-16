import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'reactstrap';
import { Container } from 'reactstrap';

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<Container>
			<Button onClick={() => loginWithRedirect()} color='info' size='lg' block>
				Log In
			</Button>
		</Container>
	);
};

export default LoginButton;
