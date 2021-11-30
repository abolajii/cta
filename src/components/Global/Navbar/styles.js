import styled from 'styled-components';
import { scaleUp } from '../../../globalstyles/styles';
import {
	largeResponsive,
	mobileResponsive,
} from '../../../responsive/responsive';

export const Container = styled.div`
	font-family: Roboto;
`;

export const Inner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 6rem;

	${mobileResponsive({ padding: '2rem' })}
`;

export const Links = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	align-items: center;
	/* background: red; */
`;
export const LinksContainer = styled.div`
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;

	${largeResponsive({ display: 'none' })}
`;

export const LinkItem = styled.div`
	font-weight: 500;
	font-size: 16px;
	text-transform: capitalize;
	cursor: pointer;
	margin: 0 1rem;
	/* background-color: red; */

	${({ menu }) =>
		menu &&
		`
margin: .5rem 0;
font-weight: normal;    
    `}
`;

export const Link = styled.a``;

export const LogoContainer = styled.div`
	margin-right: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Logo = styled.img`
	width: 62.56px;
	height: 16.02px;
`;

export const Sign = styled.div`
	/* display: none; */
	justify-content: flex-end;
	align-items: center;
`;

export const SignIn = styled.button`
	border: none;
	outline: none;
	cursor: pointer;
	font-weight: 500;
	font-size: 16px;
	text-transform: capitalize;
	cursor: pointer;
	margin: 0 1rem;
	background-color: transparent;
	color: white;
`;

export const SignUp = styled.button`
	padding: 0.5rem 1rem;
	border: none;
	outline: none;
	cursor: pointer;
	background: #ff4820;
	color: white;
	font-weight: 500;
	border-radius: 5px;
`;

export const Menu = styled.div`
	display: none;
	margin-left: 1rem;
	justify-content: flex-end;
	align-items: center;
	cursor: pointer;
	position: relative;
	/* background-color: red; */
	div {
		justify-content: flex-end;
		display: flex;
		align-items: flex-end;
	}

	${largeResponsive({ display: 'flex' })}
`;

export const ScaleUp = styled.div`
	animation: ${scaleUp} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
	-webkit-animation: ${scaleUp} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

export const MenuContainer = styled.div`
	display: flex;
	align-items: flex-end;
	flex-direction: column;
	justify-content: flex-end;
	text-align: end;
	background-color: var(--color-footer);
	padding: 1rem;
	position: absolute;
	top: 40px;
	right: 0;
	color: white;
	border-radius: 5px;
	min-width: 210px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const MenuSign = styled.div`
	display: none;
`;

export const MenuSignIn = styled.button`
	cursor: pointer;
`;

export const MenuSignUp = styled.button`
	cursor: pointer;
`;
