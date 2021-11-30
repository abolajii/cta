import React from 'react';
import { Blog } from '../../components';
import { GradientText, SectionPadding } from '../../globalstyles/styles';

import { blog1, blog2, blog3, blog4, blog5 } from './import';

const BlogContainer = () => {
	return (
		<Blog id='blog'>
			<SectionPadding>
				<Blog.Inner>
					<GradientText>
						<Blog.Text>
							A lot is happening, <br />
							We are blogging about it.
						</Blog.Text>
					</GradientText>

					<Blog.GridContainer>
						<Blog.FirstGrid>
							<Blog.Card>
								<Blog.ImageContainer>
									<Blog.Image src={blog1} alt='blog1' />
								</Blog.ImageContainer>
								<Blog.Bottom first>
									<Blog.SmallText>Nov 30, 2021</Blog.SmallText>
									<Blog.BigText>
										GPT-3 and Open AI is the future. Let us exlore how it is?
									</Blog.BigText>
									{/* <Blog.SmallText>Read Full Article</Blog.SmallText> */}
									<Blog.SmallText first down>
										Read Full Article
									</Blog.SmallText>
								</Blog.Bottom>
							</Blog.Card>
						</Blog.FirstGrid>
						<Blog.SecondGrid>
							<Blog.Card>
								<Blog.ImageContainer second>
									<Blog.Image src={blog2} alt='blog2' />
								</Blog.ImageContainer>
								<Blog.Bottom second>
									<Blog.SmallText>Nov 30, 2021</Blog.SmallText>
									<Blog.BigText>
										GPT-3 and Open AI is the future. Let us exlore how it is?
									</Blog.BigText>
									<Blog.SmallText down>Read Full Article</Blog.SmallText>
								</Blog.Bottom>
							</Blog.Card>
							<Blog.Card>
								<Blog.ImageContainer second>
									<Blog.Image src={blog3} alt='blog3' />
								</Blog.ImageContainer>
								<Blog.Bottom second>
									<Blog.SmallText>Nov 30, 2021</Blog.SmallText>
									<Blog.BigText>
										GPT-3 and Open AI is the future. Let us exlore how it is?
									</Blog.BigText>
									<Blog.SmallText down>Read Full Article</Blog.SmallText>
									{/* <Blog.SmallText>Read Full Article</Blog.SmallText> */}
								</Blog.Bottom>
							</Blog.Card>
							<Blog.Card>
								<Blog.ImageContainer second>
									<Blog.Image src={blog4} alt='blog4' />
								</Blog.ImageContainer>
								<Blog.Bottom second>
									<Blog.SmallText>Nov 30, 2021</Blog.SmallText>
									<Blog.BigText>
										GPT-3 and Open AI is the future. Let us exlore how it is?
									</Blog.BigText>
									<Blog.SmallText down>Read Full Article</Blog.SmallText>
									{/* <Blog.SmallText>Read Full Article</Blog.SmallText> */}
								</Blog.Bottom>
							</Blog.Card>
							<Blog.Card>
								<Blog.ImageContainer second>
									<Blog.Image src={blog5} alt='blog5' />
								</Blog.ImageContainer>
								<Blog.Bottom second>
									<Blog.SmallText>Nov 30, 2021</Blog.SmallText>
									<Blog.BigText>
										GPT-3 and Open AI is the future. Let us exlore how it is?
									</Blog.BigText>
									<Blog.SmallText down>Read Full Article</Blog.SmallText>
									{/* <Blog.SmallText>Read Full Article</Blog.SmallText> */}
								</Blog.Bottom>
							</Blog.Card>
						</Blog.SecondGrid>
					</Blog.GridContainer>
				</Blog.Inner>
			</SectionPadding>
		</Blog>
	);
};

export default BlogContainer;
