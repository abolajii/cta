import React from 'react';

import {
	Bottom,
	BottomLogo,
	BottomLogoContainer,
	BottomOne,
	BottomTwo,
	Button,
	Container,
	Inner,
	LinkContainer,
	SmallText,
	Text,
	Title,
} from './styles';

const Footer = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Footer.Inner = function FooterInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Footer.Bottom = function FooterBottom({ children, ...restProps }) {
	return <Bottom {...restProps}>{children}</Bottom>;
};

Footer.BottomOne = function FooterBottomOne({ children, ...restProps }) {
	return <BottomOne {...restProps}>{children}</BottomOne>;
};

Footer.BottomTwo = function FooterBottomTwo({ children, ...restProps }) {
	return <BottomTwo {...restProps}>{children}</BottomTwo>;
};

Footer.BottomLogoContainer = function FooterBottomLogoContainer({
	children,
	...restProps
}) {
	return <BottomLogoContainer {...restProps}>{children}</BottomLogoContainer>;
};

Footer.BottomLogo = function FooterBottomLogo({ ...restProps }) {
	return <BottomLogo {...restProps} />;
};

Footer.Button = function FooterButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Footer.LinkContainer = function FooterLinkContainer({
	children,
	...restProps
}) {
	return <LinkContainer {...restProps}>{children}</LinkContainer>;
};

Footer.SmallText = function FooterSmallText({ children, ...restProps }) {
	return <SmallText {...restProps}>{children}</SmallText>;
};

export default Footer;
