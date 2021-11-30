import React from 'react';
import { CTA } from '../../components';
import { SectionMargin } from '../../globalstyles/styles';

const CTAContainer = () => {
	return (
		<CTA>
			<SectionMargin>
				<CTA.Inner>
					<CTA.BoxOne>
						<CTA.SmallText>Request Early Access to Get Started</CTA.SmallText>
						<CTA.Text>
							Register today & start exploring the endless possiblities.
						</CTA.Text>
					</CTA.BoxOne>
					<CTA.BoxTwo>
						<CTA.Button>Get Started</CTA.Button>
					</CTA.BoxTwo>
				</CTA.Inner>
			</SectionMargin>
		</CTA>
	);
};

export default CTAContainer;
