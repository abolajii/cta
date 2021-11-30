import React from 'react';

import {
	BigText,
	Bottom,
	Card,
	Container,
	FirstGrid,
	GridContainer,
	Image,
	ImageContainer,
	Inner,
	SecondGrid,
	SmallText,
	Text,
} from './styles';

const Blog = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Blog.Inner = function BlogInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Blog.Text = function BlogText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Blog.GridContainer = function BlogGridContainer({ children, ...restProps }) {
	return <GridContainer {...restProps}>{children}</GridContainer>;
};

Blog.FirstGrid = function BlogFirstGrid({ children, ...restProps }) {
	return <FirstGrid {...restProps}>{children}</FirstGrid>;
};

Blog.SecondGrid = function BlogSecondGrid({ children, ...restProps }) {
	return <SecondGrid {...restProps}>{children}</SecondGrid>;
};

Blog.Card = function BlogCard({ children, ...restProps }) {
	return <Card {...restProps}>{children}</Card>;
};

Blog.ImageContainer = function BlogImageContainer({ children, ...restProps }) {
	return <ImageContainer {...restProps}>{children}</ImageContainer>;
};

Blog.Image = function BlogImage({ ...restProps }) {
	return <Image {...restProps} />;
};

Blog.Bottom = function BlogBottom({ children, ...restProps }) {
	return <Bottom {...restProps}>{children}</Bottom>;
};

Blog.SmallText = function BlogSmallText({ children, ...restProps }) {
	return <SmallText {...restProps}>{children}</SmallText>;
};

Blog.BigText = function BlogBigText({ children, ...restProps }) {
	return <BigText {...restProps}>{children}</BigText>;
};

export default Blog;
