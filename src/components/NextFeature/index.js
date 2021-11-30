import React from 'react';

import { BoxOne, BoxTwo, Container, Inner, SmallText, Text } from './styles';

const NextFeature = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

NextFeature.Inner = function NextFeatureInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

NextFeature.Text = function NextFeatureText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

NextFeature.SmallText = function NextFeatureSmallText({
	children,
	...restProps
}) {
	return <SmallText {...restProps}>{children}</SmallText>;
};

NextFeature.BoxOne = function NextFeatureBoxOne({ children, ...restProps }) {
	return <BoxOne {...restProps}>{children}</BoxOne>;
};

NextFeature.BoxTwo = function NextFeatureBoxTwo({ children, ...restProps }) {
	return <BoxTwo {...restProps}>{children}</BoxTwo>;
};

export default NextFeature;
