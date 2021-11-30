import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
* {
	margin:0;
	padding:0;
	box-sizing:border-box;
	scroll-behavior: smooth;
}
:root {
  --font-family: 'Manrope', sans-serif;

  --gradient-text: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
  --gradient-bar: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%);
  
  --color-bg: #040C18;
  --color-footer : #031B34;
  --color-blog: #042c54;
  --color-text: #81AFDD;
  --color-subtext: #FF8A71;
}

body {
	font-family: Roboto, sans-serif;
	background: var(--color-bg);
}

a{
	color: unset;
	text-decoration: none;
}

`;

render(
	<>
		<GlobalStyle />
		<App />
	</>,
	document.getElementById('root')
);
