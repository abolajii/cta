import React from 'react';

import {
	BoxOne,
	BoxTwo,
	Button,
	Container,
	Inner,
	SmallText,
	Text,
} from './styles';

const CTA = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

CTA.Inner = function CTAInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

CTA.BoxOne = function CTABoxOne({ children, ...restProps }) {
	return <BoxOne {...restProps}>{children}</BoxOne>;
};

CTA.SmallText = function CTASmallText({ children, ...restProps }) {
	return <SmallText {...restProps}>{children}</SmallText>;
};

CTA.Text = function CTAText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

CTA.BoxTwo = function CTABoxTwo({ children, ...restProps }) {
	return <BoxTwo {...restProps}>{children}</BoxTwo>;
};

CTA.Button = function CTAButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

export default CTA;
