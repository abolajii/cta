import styled, { keyframes } from 'styled-components';
import { mobileResponsive, tabResponsive } from '../responsive/responsive';

export const Gradient = styled.div`
	background: -moz-radial-gradient(
		circle at 3% 25%,
		rgba(0, 40, 83, 1) 0%,
		rgba(4, 12, 24, 1) 100%
	);
	background: -webkit-radial-gradient(
		circle at 3% 25%,
		rgba(0, 40, 83, 1) 0%,
		rgba(4, 12, 24, 1) 100%
	);
	background: -o-radial-gradient(
		circle at 3% 25%,
		rgba(0, 40, 83, 1) 0%,
		rgba(4, 12, 24, 1) 100%
	);
	background: -ms-radial-gradient(
		circle at 3% 25%,
		rgba(0, 40, 83, 1) 0%,
		rgba(4, 12, 24, 1) 100%
	);
	background: radial-gradient(
		circle at 3% 25%,
		rgba(0, 40, 83, 1) 0%,
		rgba(4, 12, 24, 1) 100%
	);

	/* height: 700px; */
`;

export const GradientText = styled.div`
	background: var(--gradient-text);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export const SectionPadding = styled.div`
	padding: 4rem 6rem;
	${tabResponsive({ padding: '4rem' })}
	${mobileResponsive({ padding: '4rem 2rem' })}
`;

export const SectionMargin = styled.div`
	margin: 4rem 6rem;
	${tabResponsive({ margin: '4rem' })}
	${mobileResponsive({ margin: '4rem 2rem' })}
`;

export const scaleUp = keyframes`
 0% {
     -webkit-transform: scale(0.5);
     transform: scale(0.5);
    }
    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
`;
