import styled from 'styled-components';
import { mobileResponsive } from '../../responsive/responsive';

export const Container = styled.div``;

export const Inner = styled.div`
	height: 172px;
	border-radius: 10px;
	display: flex;
	background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);

	${mobileResponsive({ flexDirection: 'column', height: 'auto' })}
`;

export const BoxOne = styled.div`
	flex: 2;
	padding: 2rem;
	flex-direction: column;
	display: flex;
	/* align-items: center; */
	justify-content: center;
	${mobileResponsive({ flex: '1' })}
`;

export const SmallText = styled.p`
	font-size: 12px;
	font-weight: 500;
	line-height: 30px;
	text-align: left;
	color: #0e0e0e;
`;

export const Text = styled.p`
	font-size: 24px;
	font-weight: 800;
	line-height: 45px;
	color: #000;
	${mobileResponsive({
		fontSize: 24,
		lineHeight: '30px',
	})}
`;

export const BoxTwo = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	${mobileResponsive({
		paddingBottom: '2rem',
	})}
`;

export const Button = styled.button`
	background: #000;
	height: 59px;
	width: 189px;
	color: white;
	font-size: 18px;
	font-style: normal;
	font-weight: 700;
	line-height: 30px;
	border-radius: 40px;
	outline: none;
	border: none;
`;
