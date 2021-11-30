import React from 'react';
import { Possibility } from '../../components';
import { GradientText, SectionPadding } from '../../globalstyles/styles';
import possibility from '../../assets/possibility.png';

const PossibilityContainer = () => {
	return (
		<Possibility id='possibility'>
			<SectionPadding>
				<Possibility.Inner>
					<Possibility.BoxOne>
						<Possibility.ImageContainer>
							<Possibility.Image src={possibility} />
						</Possibility.ImageContainer>
					</Possibility.BoxOne>
					<Possibility.BoxTwo>
						<Possibility.Text bold>
							Request Early Access to Get Started
						</Possibility.Text>
						<GradientText>
							<Possibility.Title>
								The possibilities are beyond your imagination
							</Possibility.Title>
						</GradientText>
						<Possibility.SmallText>
							Yet bed any for travelling assistance indulgence unpleasing. Not
							thoughts all exercise blessing. Indulgence way everything joy
							alteration boisterous the attachment. Party we years to order
							allow asked of.
						</Possibility.SmallText>
						<Possibility.Text>
							Request Early Access to Get Started
						</Possibility.Text>
					</Possibility.BoxTwo>
				</Possibility.Inner>
			</SectionPadding>
		</Possibility>
	);
};

export default PossibilityContainer;
