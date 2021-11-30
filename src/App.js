import React from 'react';
import {
	FooterContainer,
	BlogContainer,
	PossibilityContainer,
	HeaderContainer,
	NextFeatureContainer,
	WhatGPT3Container,
	CTAContainer,
	BrandContainer,
	NavbarContainer,
} from './container';
import { Gradient } from './globalstyles/styles';

const App = () => {
	return (
		<>
			<Gradient>
				<NavbarContainer />
				<HeaderContainer />
			</Gradient>
			<BrandContainer />
			<WhatGPT3Container />
			<NextFeatureContainer />
			<PossibilityContainer />
			<CTAContainer />
			<BlogContainer />
			<FooterContainer />
		</>
	);
};

export default App;
