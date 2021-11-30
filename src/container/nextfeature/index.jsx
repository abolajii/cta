import React from 'react';
import { NextFeature } from '../../components';
import { FeatureContainer } from '../../container';
import { GradientText, SectionPadding } from '../../globalstyles/styles';

const NextFeatureContainer = () => {
	return (
		// <Gradient>
		<NextFeature>
			<SectionPadding>
				<NextFeature.Inner>
					<NextFeature.BoxOne>
						<GradientText>
							<NextFeature.Text>
								The Future is Now and You Just Need To Realize It. Step into
								Future Today & Make it Happen.
							</NextFeature.Text>
						</GradientText>
						<NextFeature.SmallText>
							Request Early Access to Get Started
						</NextFeature.SmallText>
					</NextFeature.BoxOne>
					<NextFeature.BoxTwo>
						<FeatureContainer
							top
							title='Improving end distrusts instantly '
							text='From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
						/>
						<FeatureContainer
							top
							title='Become the tended active'
							text='Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
						/>
						<FeatureContainer
							top
							title='Message or am nothing'
							text='Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
						/>
						<FeatureContainer
							top
							title='Really boy law county'
							text='Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
						/>
					</NextFeature.BoxTwo>
				</NextFeature.Inner>
			</SectionPadding>
		</NextFeature>
		// </Gradient>
	);
};

export default NextFeatureContainer;
