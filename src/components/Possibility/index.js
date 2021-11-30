import React from 'react';

import {
	BoxOne,
	BoxTwo,
	Container,
	Image,
	ImageContainer,
	Inner,
	SmallText,
	Text,
	Title,
} from './styles';

const Possibility = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Possibility.Inner = function PossibilityInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Possibility.BoxOne = function PossibilityBoxOne({ children, ...restProps }) {
	return <BoxOne {...restProps}>{children}</BoxOne>;
};

Possibility.BoxTwo = function PossibilityBoxTwo({ children, ...restProps }) {
	return <BoxTwo {...restProps}>{children}</BoxTwo>;
};

Possibility.ImageContainer = function PossibilityImageContainer({
	children,
	...restProps
}) {
	return <ImageContainer {...restProps}>{children}</ImageContainer>;
};

Possibility.Image = function PossibilityImage({ ...restProps }) {
	return <Image {...restProps} />;
};

Possibility.Title = function PossibilityTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Possibility.SmallText = function PossibilitySmallText({
	children,
	...restProps
}) {
	return <SmallText {...restProps}>{children}</SmallText>;
};

Possibility.Text = function PossibilityText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

export default Possibility;
