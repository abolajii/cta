import styled, { css } from 'styled-components';
import { mobileResponsive } from '../../responsive/responsive';

export const Container = styled.div`
	${({ top }) =>
		top &&
		css`
			/* background-color: red; */
			width: 100%;
			display: flex;
			justify-content: space-between;
			margin: 1rem;

			${mobileResponsive({ flexDirection: 'column' })}
		`}
	margin: 1rem;
`;

export const Inner = styled.div``;

export const Heading = styled.div`
	flex: 1;
	max-width: 180px;
	margin-right: 2rem;
	/* background: blue; */
`;

export const Underline = styled.div`
	width: 38px;
	height: 3px;
	background: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%),
		#ffffff;

	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
	margin-bottom: 0.5rem;
`;

export const Title = styled.h1`
	/* font-family: Manrope; */
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
	color: white;
	text-align: left;
`;

export const Text = styled.div`
	flex: 1;
	margin-top: 1rem;
	color: #81afdd;
	line-height: 26px;
	${({ top }) =>
		top &&
		css`
			flex: 2;
			max-width: 74%;
			margin-top: 0rem;
		`}
`;
