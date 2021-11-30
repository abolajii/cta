import styled, { css } from 'styled-components';
import { mobileResponsive } from '../../../responsive/responsive';

export const Container = styled.div`
	background: #031b34;
`;

export const Inner = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const Title = styled.h1`
	font-size: 62px;
	font-weight: 800;
	line-height: 75px;
	text-align: center;
	padding: 4rem;

	${mobileResponsive({ padding: '1rem', fontSize: '38px', lineHeight: '45px' })}
`;

export const Bottom = styled.div`
	flex: 1;
	display: flex;
	/* background-color: red; */
	width: 100%;
	padding: 4rem;
	margin-top: 10rem;

	${mobileResponsive({ flexDirection: 'column', padding: '1rem' })}
`;

export const BottomLogoContainer = styled.div`
	width: 80px;
	margin-bottom: 2rem;
`;

export const BottomLogo = styled.img`
	width: 100%;
`;

export const Button = styled.button`
	width: 218px;
	height: 65px;
	text-transform: capitalize;
	border: none;
	outline: none;
	background-color: transparent;
	border: 1px solid #ffffff;
	font-size: 18px;
	line-height: 21px;
	letter-spacing: 0em;
	color: white;
	cursor: pointer;
`;

export const Text = styled.p`
	width: 67%;
	font-size: 12px;
	line-height: 14px;
	letter-spacing: 0em;
	text-align: left;
	color: white;
	margin: 3rem 0;
	text-transform: capitalize;

	${({ first }) =>
		first &&
		css`
			margin: 2.5rem 0;
		`}
	${mobileResponsive({ fontSize: '9px', lineHeight: '10px' })}
`;

export const SmallText = styled.p`
	font-size: 14px;
	line-height: 16px;
	text-align: left;
	color: white;
	text-transform: capitalize;
	font-weight: bold;
`;

export const BottomOne = styled.div`
	flex: 1;
`;

export const LinkContainer = styled.div``;

export const BottomTwo = styled.div`
	flex: 2;
	display: grid;
	grid-template-columns: repeat(3, 1fr);

	${mobileResponsive({ gridTemplateColumns: 'repeat(1fr)' })}
`;
