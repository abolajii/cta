import React from 'react';
import { Header } from '../../components';
import { GradientText, SectionPadding } from '../../globalstyles/styles';

import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const HeaderContainer = () => {
	return (
		<Header id='home'>
			<SectionPadding>
				<Header.Inner>
					<Header.BoxOne>
						<GradientText>
							<Header.Title>
								Let's build something amazing with GPT-3 OpenAI
							</Header.Title>
						</GradientText>
						<Header.SmallText>
							Yet bed any for travelling assistance indulgence unpleasing. Not
							thoughts all exercise blessing. Indulgence way everything joy
							alteration boisterous the attachment. Party we years to order
							allow asked of.
						</Header.SmallText>

						<Header.InputContainer>
							<Header.Input placeholder='Your email address' />
							<Header.Button>Get started</Header.Button>
						</Header.InputContainer>
						<Header.People>
							<Header.PeopleImage src={people} alt='people' />
							<Header.PeopleText>
								1,600 people requested access a visit in last 24 hours
							</Header.PeopleText>
						</Header.People>
					</Header.BoxOne>
					<Header.BoxTwo>
						<Header.ImageContainer>
							<Header.Image src={ai} alt='ai' />
						</Header.ImageContainer>
					</Header.BoxTwo>
				</Header.Inner>
			</SectionPadding>
		</Header>
	);
};

export default HeaderContainer;
