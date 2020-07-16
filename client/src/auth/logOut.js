import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'reactstrap';

const LogoutButton = () => {
	const { logout } = useAuth0();

	return (
		<Button onClick={() => logout()} color='secondary' size='lg' block>
			Log Out
		</Button>
	);
};

export default LogoutButton;
