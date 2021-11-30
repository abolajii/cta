import { css } from 'styled-components';

export const largeResponsive = (props) => {
	return css`
		@media screen and (max-width: 1050px) {
			${props}
		}
	`;
};

export const tabResponsive = (props) => {
	return css`
		@media screen and (max-width: 700px) {
			${props}
		}
	`;
};

export const mobileResponsive = (props) => {
	return css`
		@media screen and (max-width: 550px) {
			${props}
		}
	`;
};
