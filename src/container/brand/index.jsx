import React from 'react';
import { Brand } from '../../components';
import { SectionPadding } from '../../globalstyles/styles';
import { google, slack, atlassian, dropbox, shopify } from './import';

const BrandContainer = () => {
	return (
		<Brand id=''>
			<SectionPadding>
				<Brand.Inner>
					<Brand.ImageContainer>
						<Brand.Image src={google} alt='google' />
					</Brand.ImageContainer>
					<Brand.ImageContainer>
						<Brand.Image src={slack} alt='slack' />
					</Brand.ImageContainer>
					<Brand.ImageContainer>
						<Brand.Image src={atlassian} alt='atlassian' />
					</Brand.ImageContainer>
					<Brand.ImageContainer>
						<Brand.Image src={dropbox} alt='dropbox' />
					</Brand.ImageContainer>
					<Brand.ImageContainer>
						<Brand.Image src={shopify} alt='shopify' />
					</Brand.ImageContainer>
				</Brand.Inner>
			</SectionPadding>
		</Brand>
	);
};

export default BrandContainer;
