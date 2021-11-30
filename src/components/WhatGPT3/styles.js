import styled from 'styled-components';
import { mobileResponsive } from '../../responsive/responsive';

export const Container = styled.div``;

export const Inner = styled.div`
	display: flex;
	flex-direction: column;

	padding: 2rem;
	background: var(--color-footer);

	/* ff 3.6+ */
	background: -moz-radial-gradient(
		circle at 30% -100%,
		#042c54 25%,
		rgba(4, 44, 84, 1) 85%,
		rgba(27, 120, 222, 1) 100%
	);

	/* safari 5.1+,chrome 10+ */
	background: -webkit-radial-gradient(
		circle at 30% -100%,
		#042c54 25%,
		rgba(4, 44, 84, 1) 85%,
		rgba(27, 120, 222, 1) 100%
	);

	/* opera 11.10+ */
	background: -o-radial-gradient(
		circle at 30% -100%,
		#042c54 25%,
		rgba(4, 44, 84, 1) 85%,
		rgba(27, 120, 222, 1) 100%
	);

	/* ie 10+ */
	background: -ms-radial-gradient(
		circle at 30% -100%,
		#042c54 25%,
		rgba(4, 44, 84, 1) 85%,
		rgba(27, 120, 222, 1) 100%
	);

	/* global 92%+ browsers support */
	background: radial-gradient(
		circle at 30% -100%,
		#042c54 25%,
		rgba(4, 44, 84, 1) 85%,
		rgba(27, 120, 222, 1) 100%
	);

	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Heading = styled.div`
	display: flex;
	margin: 4rem 0 2rem;
	align-items: center;
	justify-content: space-between;
`;

export const Text = styled.h1`
	max-width: 70%;
	font-size: 34px;
	font-weight: 800;
	text-align: left;
`;

export const SmallText = styled.p`
	color: #ff8a71;
	font-size: 16px;
	font-weight: 500;
	line-height: 30px;
	text-align: left;
	cursor: pointer;
`;

export const Feature = styled.div``;

export const Bottom = styled.div`
	display: flex;
	margin-top: 2rem;

	${mobileResponsive({ flexDirection: 'column' })}
`;
