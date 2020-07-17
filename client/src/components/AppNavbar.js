import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const AppNavbar = () => {
	const [collapsed, setCollapsed] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<div>
			<Navbar color='info' dark>
				<NavbarBrand href='/'>POST TO DATABASE</NavbarBrand>
				<NavbarToggler onClick={toggleNavbar} className='space-around' />
				<Collapse isOpen={!collapsed} navbar>
					<Nav className='ml-auto' navbar>
						<NavItem>
							<NavLink href='https://github.com/jorgecasal/postToDatabase' target='_blank'>
								REPO
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default AppNavbar;
