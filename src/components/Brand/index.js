import React from 'react';

import { Container, Image, ImageContainer, Inner } from './styles';

const Brand = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Brand.Inner = function BrandInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Brand.ImageContainer = function BrandImageContainer({
	children,
	...restProps
}) {
	return <ImageContainer {...restProps}>{children}</ImageContainer>;
};

Brand.Image = function BrandImage({ ...restProps }) {
	return <Image {...restProps} />;
};

export default Brand;
