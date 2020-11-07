import { createGlobalStyle } from 'styled-components';
import { rem } from 'polished';

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
	}

	body,
	input,
	button {
		font-family: ${props => props.theme.fonts.primary}, serif;
		font-size: 16px;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	strong {
		font-weight: 500;
	}

	button {
		cursor: pointer;
	}

	a {
		text-decoration: none;
	}

	li {
		list-style: none;
	}
`;
