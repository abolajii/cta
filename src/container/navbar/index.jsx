import React, { useState } from 'react';
import { Navbar } from '../../components';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import logo from '../../assets/logo.svg';

const Menu = ({ menu }) => (
	<>
		<Navbar.LinkItem menu={menu}>
			<Navbar.Link href='#home'>Home</Navbar.Link>
		</Navbar.LinkItem>
		<Navbar.LinkItem menu={menu}>
			<Navbar.Link href='#wgpt3'>What is GTP3?</Navbar.Link>
		</Navbar.LinkItem>
		<Navbar.LinkItem menu={menu}>
			<Navbar.Link href='#possibility'>Open AI</Navbar.Link>
		</Navbar.LinkItem>
		<Navbar.LinkItem menu={menu}>
			<Navbar.Link href='#features'>Case Study</Navbar.Link>
		</Navbar.LinkItem>
		<Navbar.LinkItem menu={menu}>
			<Navbar.Link href='#blog'>Library</Navbar.Link>
		</Navbar.LinkItem>
	</>
);

const NavbarContainer = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<Navbar>
			<Navbar.Inner>
				<Navbar.Links>
					<Navbar.LogoContainer>
						<Navbar.Logo src={logo} alt='logo' />
					</Navbar.LogoContainer>
					<Navbar.LinksContainer>
						<Menu />
					</Navbar.LinksContainer>
				</Navbar.Links>
				<Navbar.Sign>
					<Navbar.SignIn>Sign In</Navbar.SignIn>
					<Navbar.SignUp>Sign Up</Navbar.SignUp>
				</Navbar.Sign>

				<Navbar.Menu>
					{toggle ? (
						<div>
							<RiCloseLine
								className='icon'
								onClick={() => setToggle(false)}
								color='#fff'
								size={26}
							/>
						</div>
					) : (
						<div>
							<RiMenu3Line
								onClick={() => setToggle(true)}
								className='icon'
								color='#fff'
								size={26}
							/>
						</div>
					)}

					{toggle && (
						<Navbar.ScaleUp>
							<Navbar.MenuContainer>
								<Menu menu={true} />
								{/* <Navbar.MenuSign>
									<Navbar.MenuSignIn>Sign In</Navbar.MenuSignIn>
									<Navbar.MenuSignUp>Sign Up</Navbar.MenuSignUp>
								</Navbar.MenuSign> */}
							</Navbar.MenuContainer>
						</Navbar.ScaleUp>
					)}
				</Navbar.Menu>
			</Navbar.Inner>
		</Navbar>
	);
};

export default NavbarContainer;
