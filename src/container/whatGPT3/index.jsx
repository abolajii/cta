import React from 'react';
import { WhatGPT3 } from '../../components';
import { FeatureContainer } from '../../container';
import { GradientText, SectionMargin } from '../../globalstyles/styles';

const WhatGPT3Container = () => {
	return (
		<WhatGPT3 id='wgpt3'>
			<SectionMargin>
				<WhatGPT3.Inner>
					<WhatGPT3.Feature>
						<FeatureContainer
							top
							text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
							title='What is GPT-3'
						/>
					</WhatGPT3.Feature>

					<WhatGPT3.Heading>
						<GradientText>
							<WhatGPT3.Text>
								The possibilities are beyond your imagination
							</WhatGPT3.Text>
						</GradientText>

						<WhatGPT3.SmallText>Explore The Library</WhatGPT3.SmallText>
					</WhatGPT3.Heading>

					<WhatGPT3.Bottom>
						<FeatureContainer
							title='Chatbots'
							text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '
						/>
						<FeatureContainer
							title='Knowledgebase'
							text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments'
						/>
						<FeatureContainer
							title='Education'
							text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments'
						/>
					</WhatGPT3.Bottom>
				</WhatGPT3.Inner>
			</SectionMargin>
		</WhatGPT3>
	);
};

export default WhatGPT3Container;
