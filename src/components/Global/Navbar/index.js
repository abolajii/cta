import React from 'react';

import {
	Container,
	Inner,
	Link,
	LinkItem,
	Links,
	LinksContainer,
	Logo,
	LogoContainer,
	Menu,
	MenuContainer,
	MenuSign,
	MenuSignIn,
	MenuSignUp,
	ScaleUp,
	Sign,
	SignIn,
	SignUp,
} from './styles';

const Navbar = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Navbar.Inner = function NavbarInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Navbar.Links = function NavbarLinks({ children, ...restProps }) {
	return <Links {...restProps}>{children}</Links>;
};

Navbar.LinkItem = function NavbarLinkItem({ children, ...restProps }) {
	return <LinkItem {...restProps}>{children}</LinkItem>;
};

Navbar.Link = function NavbarLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>;
};

Navbar.Sign = function NavbarSign({ children, ...restProps }) {
	return <Sign {...restProps}>{children}</Sign>;
};

Navbar.SignIn = function NavbarSignIn({ children, ...restProps }) {
	return <SignIn {...restProps}>{children}</SignIn>;
};

Navbar.SignUp = function NavbarSignUp({ children, ...restProps }) {
	return <SignUp {...restProps}>{children}</SignUp>;
};

Navbar.LinksContainer = function NavbarLinksContainer({
	children,
	...restProps
}) {
	return <LinksContainer {...restProps}>{children}</LinksContainer>;
};

Navbar.LogoContainer = function NavbarLogoContainer({
	children,
	...restProps
}) {
	return <LogoContainer {...restProps}>{children}</LogoContainer>;
};

Navbar.Logo = function NavbarLogo({ ...restProps }) {
	return <Logo {...restProps} />;
};

Navbar.Menu = function NavbarMenu({ children, ...restProps }) {
	return <Menu {...restProps}>{children}</Menu>;
};

Navbar.MenuSign = function NavbarMenuSign({ children, ...restProps }) {
	return <MenuSign {...restProps}>{children}</MenuSign>;
};

Navbar.MenuSignIn = function NavbarMenuSignIn({ children, ...restProps }) {
	return <MenuSignIn {...restProps}>{children}</MenuSignIn>;
};

Navbar.MenuSignUp = function NavbarMenuSignUp({ children, ...restProps }) {
	return <MenuSignUp {...restProps}>{children}</MenuSignUp>;
};

Navbar.MenuContainer = function NavbarMenuContainer({
	children,
	...restProps
}) {
	return <MenuContainer {...restProps}>{children}</MenuContainer>;
};

Navbar.ScaleUp = function NavbarScaleUp({ children, ...restProps }) {
	return <ScaleUp {...restProps}>{children}</ScaleUp>;
};

export default Navbar;
