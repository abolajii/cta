import React from 'react';

import { Container, Inner } from './styles';

const Article = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Article.Inner = function ArticleInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

export default Article;
