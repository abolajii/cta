import React from 'react';
import { Feature } from '../../components';

const FeatureContainer = ({ text, top, title }) => {
	return (
		<Feature top={top}>
			<Feature.Inner>
				<Feature.Heading>
					<Feature.Underline />
					<Feature.Title>{title}</Feature.Title>
				</Feature.Heading>
			</Feature.Inner>
			<Feature.Text top={top}>{text}</Feature.Text>
		</Feature>
	);
};

export default FeatureContainer;
