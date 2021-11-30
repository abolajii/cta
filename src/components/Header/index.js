import React from 'react';

import {
	BoxOne,
	BoxTwo,
	Button,
	Container,
	Image,
	ImageContainer,
	Inner,
	Input,
	InputContainer,
	People,
	PeopleImage,
	PeopleText,
	SmallText,
	Title,
} from './styles';

const Header = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Header.Inner = function HeaderInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Header.BoxOne = function HeaderBoxOne({ children, ...restProps }) {
	return <BoxOne {...restProps}>{children}</BoxOne>;
};

Header.BoxTwo = function HeaderBoxTwo({ children, ...restProps }) {
	return <BoxTwo {...restProps}>{children}</BoxTwo>;
};

Header.Title = function HeaderTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Header.SmallText = function HeaderSmallText({ children, ...restProps }) {
	return <SmallText {...restProps}>{children}</SmallText>;
};

Header.ImageContainer = function HeaderImageContainer({
	children,
	...restProps
}) {
	return <ImageContainer {...restProps}>{children}</ImageContainer>;
};

Header.Image = function HeaderImage({ ...restProps }) {
	return <Image {...restProps} />;
};

Header.InputContainer = function HeaderInputContainer({
	children,
	...restProps
}) {
	return <InputContainer {...restProps}>{children}</InputContainer>;
};

Header.Input = function HeaderInput({ ...restProps }) {
	return <Input {...restProps} />;
};

Header.Button = function HeaderButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

Header.People = function HeaderPeople({ children, ...restProps }) {
	return <People {...restProps}>{children}</People>;
};

Header.PeopleText = function HeaderPeopleText({ children, ...restProps }) {
	return <PeopleText {...restProps}>{children}</PeopleText>;
};

Header.PeopleImage = function HeaderPeopleImage({ ...restProps }) {
	return <PeopleImage {...restProps} />;
};

export default Header;
