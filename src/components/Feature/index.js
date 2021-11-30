import React from 'react';

import { Container, Heading, Inner, Text, Title, Underline } from './styles';

const Feature = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Feature.Inner = function FeatureInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Feature.Heading = function FeatureHeading({ children, ...restProps }) {
	return <Heading {...restProps}>{children}</Heading>;
};

Feature.Underline = function FeatureUnderline({ ...restProps }) {
	return <Underline {...restProps} />;
};

Feature.Title = function FeatureTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Feature.Text = function FeatureText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

export default Feature;
