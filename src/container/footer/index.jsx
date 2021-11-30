import React from 'react';
import { Footer } from '../../components';
import { GradientText, SectionPadding } from '../../globalstyles/styles';

import logo from '../../assets/logo.svg';

const FooterContainer = () => {
	return (
		<Footer>
			<SectionPadding>
				<Footer.Inner>
					<GradientText>
						<Footer.Title>
							Do you want to step in to the future before others
						</Footer.Title>
					</GradientText>
					<Footer.Button>request early access</Footer.Button>
					<Footer.Bottom>
						<Footer.BottomOne>
							<Footer.BottomLogoContainer>
								<Footer.BottomLogo src={logo} />
							</Footer.BottomLogoContainer>
							<Footer.Text first>
								Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
							</Footer.Text>
						</Footer.BottomOne>
						<Footer.BottomTwo>
							<Footer.LinkContainer>
								<Footer.SmallText>link</Footer.SmallText>
								<Footer.Text>Overons</Footer.Text>
								<Footer.Text>Social Media</Footer.Text>
								<Footer.Text>Counters</Footer.Text>
								<Footer.Text>Contact</Footer.Text>
							</Footer.LinkContainer>
							<Footer.LinkContainer>
								<Footer.SmallText>company</Footer.SmallText>
								<Footer.Text>Terms & Conditions</Footer.Text>
								<Footer.Text>Privacy Policy</Footer.Text>
								<Footer.Text>Contact</Footer.Text>
							</Footer.LinkContainer>
							<Footer.LinkContainer>
								<Footer.SmallText>get in touch</Footer.SmallText>
								<Footer.Text>Crechterwoord</Footer.Text>
								<Footer.Text>085-132567</Footer.Text>
								<Footer.Text>info@payme.net</Footer.Text>
							</Footer.LinkContainer>
						</Footer.BottomTwo>
					</Footer.Bottom>
				</Footer.Inner>
			</SectionPadding>
		</Footer>
	);
};

export default FooterContainer;
