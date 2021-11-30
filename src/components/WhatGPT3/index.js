import React from 'react';

import {
	Bottom,
	Container,
	Feature,
	Heading,
	Inner,
	SmallText,
	Text,
} from './styles';

const WhatGPT3 = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

WhatGPT3.Inner = function WhatGPT3Inner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

WhatGPT3.Feature = function WhatGPT3Feature({ children, ...restProps }) {
	return <Feature {...restProps}>{children}</Feature>;
};

WhatGPT3.Heading = function WhatGPT3Heading({ children, ...restProps }) {
	return <Heading {...restProps}>{children}</Heading>;
};

WhatGPT3.Text = function WhatGPT3Text({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

WhatGPT3.SmallText = function WhatGPT3SmallText({ children, ...restProps }) {
	return <SmallText {...restProps}>{children}</SmallText>;
};

WhatGPT3.Bottom = function WhatGPT3Bottom({ children, ...restProps }) {
	return <Bottom {...restProps}>{children}</Bottom>;
};

export default WhatGPT3;
