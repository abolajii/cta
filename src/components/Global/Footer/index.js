import React from 'react';

import { Container, Inner } from './styles';

const Footer = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Footer.Inner = function FooterInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

export default Footer;
