import styled, { css } from 'styled-components';
import { largeResponsive } from '../../responsive/responsive';

export const Container = styled.div``;

export const Inner = styled.div`
	/* background-color: red; */
	display: flex;
	${largeResponsive({
		flexDirection: 'column',
	})}
`;
export const BoxOne = styled.div`
	flex: 1;
`;

export const BoxTwo = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	padding: 2rem;
	padding-top: 12rem;
	flex-direction: column;
	${largeResponsive({
		paddingTop: '7rem',
		justifyContent: 'center',
	})}
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
	width: 100%;
`;

export const Text = styled.p`
	/* width: 100%; */
	font-size: 16px;
	font-weight: 500;
	line-height: 30px;
	letter-spacing: 0em;
	/* text-align: left; */
	color: #ff8a71;
	${({ bold }) =>
		bold &&
		css`
			color: #71e5ff;
		`}
`;

export const Title = styled.h1`
	/* width: 100%; */
	/* max-width: 70%; */
	margin-top: 1rem;
`;

export const SmallText = styled.p`
	font-size: 16px;
	margin: 1rem 0;
	font-style: normal;
	font-weight: 400;
	line-height: 30px;
	color: #81afdd;
`;
