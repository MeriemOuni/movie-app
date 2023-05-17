import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavBar = () => {
	return (
		<div>
			<Navbar bg='info' variant='dark'>
				<Container>
					<Navbar.Brand href='/'>MY APP</Navbar.Brand>
					<Nav className='me-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavBar;
