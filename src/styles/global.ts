import { createGlobalStyle } from 'styled-components';
import { rem } from 'polished';

import githubLogo from '../assets/images/github-logo.svg';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: none;
		box-sizing: border-box;
		font-size: ${rem(16)};
	}

	body {
		-webkit-font-smoothing: antialiased;
		background: ${props => props.theme.colors.tertiary};
		background-image: url(${githubLogo});
		background-repeat: no-repeat;
		background-position: 70% top;
	}

	#root {
		max-width: 960px;
		margin: 0 auto;
		padding: 40px 20px;
	}

	body,
	input,
	button {
		font-family: ${props => props.theme.fonts.primary}, sans-serif;
	}

	button {
		cursor: pointer;
	}

	a {
		text-decoration: none;
	}

	ul,
	li {
		list-style: none;
	}
`;
