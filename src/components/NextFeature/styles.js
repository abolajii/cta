import styled from 'styled-components';
import { largeResponsive } from '../../responsive/responsive';

export const Container = styled.div`
	/* background: red; */
`;

export const Inner = styled.div`
	display: flex;
	${largeResponsive({ flexDirection: 'column' })}
`;

export const Text = styled.h1`
	max-width: 70%;
	margin-bottom: 3rem;
`;

export const SmallText = styled.p`
	font-size: 16px;
	font-weight: 500;
	line-height: 30px;
	text-align: left;
	color: #ff8a71;
`;

export const BoxOne = styled.div`
	flex: 1;
`;

export const BoxTwo = styled.div`
	flex: 1;
	${largeResponsive({ marginTop: '3rem' })}
`;
