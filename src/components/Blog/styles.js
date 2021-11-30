import styled, { css } from 'styled-components';
import { largeResponsive, mobileResponsive } from '../../responsive/responsive';

export const Container = styled.div``;

export const Inner = styled.div`
	/* background: red; */
`;

export const Text = styled.h1`
	font-size: 53px;
	/* background: lightcyan; */
	font-weight: 800;
	line-height: 70px;
	/* text-align: left; */
	max-width: 60%;
	${largeResponsive({ maxWidth: '100%' })}
`;

export const GridContainer = styled.div`
	display: flex;
	/* grid-template-columns: repeat(2, 1fr); */
	/* background-color: red; */
	gap: 20px;
	margin-top: 6rem;
	${largeResponsive({ flexDirection: 'column' })}
`;

export const FirstGrid = styled.div`
	flex: 1;
	height: 500px;
	/* background: red; */
`;

export const SecondGrid = styled.div`
	flex: 2;
	gap: 20px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	${mobileResponsive({ gridTemplateColumns: '1fr' })}
`;

export const Card = styled.div`
	/* background: #042c54; */
	/* height: 330px; */
`;

export const ImageContainer = styled.div`
	width: 100%;
	height: 287px;

	${({ second }) =>
		second &&
		css`
			height: 130px;
		`}
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Bottom = styled.div`
	background: #042c54;
	height: 380px;
	padding: 1rem;

	${({ first }) =>
		first &&
		css`
			/* margin-top: 4rem; */
		`}

	${({ second }) =>
		second &&
		css`
			height: 193px;
		`}
`;

export const SmallText = styled.p`
	font-size: 12px;
	font-weight: 700;
	line-height: 35px;
	text-align: left;
	color: #fff;
	/* margin-top: 3rem; */

	${({ down }) =>
		down &&
		css`
			margin-top: 2.5rem;
			${largeResponsive({ marginTop: '.5rem' })}
		`}
	${({ first, down }) =>
		down &&
		first &&
		css`
			margin-top: 14rem;
			${largeResponsive({ marginTop: '12.5rem' })}
		`}
`;

export const BigText = styled.p`
	font-size: 19px;
	color: #fff;
	font-weight: 800;
	line-height: 30px;
	letter-spacing: 0em;
	text-align: left;
`;
