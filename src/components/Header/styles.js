import styled from 'styled-components';
import { largeResponsive, mobileResponsive } from '../../responsive/responsive';

export const Container = styled.div``;

export const Inner = styled.div`
	display: flex;
	${largeResponsive({ flexDirection: 'column' })}
`;

export const BoxOne = styled.div`
	flex: 1;
	/* background: green; */
`;

export const BoxTwo = styled.div`
	flex: 1;
	/* display: flex;
	align-items: center;
	justify-content: center; */
	${largeResponsive({
		marginTop: '5rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	})}
`;

export const Title = styled.h1`
	font-size: 50px;
	/* font-weight: 800; */
	letter-spacing: 1px;
	text-transform: capitalize;
`;

export const SmallText = styled.p`
	text-align: left;
	max-width: 95%;
	line-height: 24px;
	color: #81afdd;
	margin: 1rem 0;
`;

export const ImageContainer = styled.div`
	/* flex: 1; */
	/* display: flex; */
	align-items: center;
	justify-content: center;
	height: 390px;
	width: 500px;
	margin-left: 2rem;
	/* background: red; */
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const People = styled.div`
	display: flex;
	align-items: center;
	margin-top: 2rem;
`;

export const PeopleImage = styled.img`
	width: 180px;
`;

export const PeopleText = styled.p`
	font-size: 14px;
	color: white;
	margin-left: 1rem;
`;

export const InputContainer = styled.div`
	flex: 1;
	margin-top: 1.7rem;
`;

export const Input = styled.input`
	width: 80%;
	padding: 1.4rem 1rem;
	outline: none;
	border: none;
	background: #052d56;
	border-radius: 5px 0px 0px 5px;

	${mobileResponsive({ width: '65%' })}
`;

export const Button = styled.button`
	padding: 1.4rem 1rem;
	outline: none;
	border: none;
	cursor: pointer;
	color: white;
	text-transform: capitalize;
	border-radius: 0px 5px 5px 0px;
	background: #ff4820;
`;
