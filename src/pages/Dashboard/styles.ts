import styled from 'styled-components';
import { rem, shade } from 'polished';

export const Title = styled.h1`
	font-size: ${rem(40)};
	color: ${props => props.theme.colors.primary};
	line-height: 56px;
	margin-top: 80px;
	max-width: 450px;
`;

export const Form = styled.form`
	margin-top: 40px;
	max-width: 700px;
	display: flex;
	input {
		flex: 1;
		height: 70px;
		padding: 0 24px;
		border: 0;
		border-radius: 5px 0 0 5px;
		color: ${props => props.theme.colors.primary};
		&::placeholder {
			color: ${props => props.theme.colors.quartenary};
		}
	}
	button {
		height: 70px;
		width: 210px;
		background: ${props => props.theme.colors.secundary};
		border: none;
		border-radius: 0 5px 5px 0;
		color: ${props => props.theme.colors.white};
		font-weight: bold;
		&:hover {
			transition: background-color 0.4s;
			background: ${props => shade(0.2, props.theme.colors.secundary)};
		}
	}
`;

export const Repositories = styled.div`
	margin-top: 80px;
	max-width: 700px;
	a {
		background: ${props => props.theme.colors.white};
		border-radius: 5px;
		width: 100%;
		padding: 24px;
		display: flex;
		align-items: center;
		& + a {
			margin-top: 16px;
		}
		&:hover {
			transform: translateX(10px);
			transition: transform 0.2s;
		}
		img {
			height: 64px;
			width: 64px;
			border-radius: 50%;
		}
		div {
			margin-left: 16px;
			strong {
				font-size: ${rem(20)};
				color: ${props => props.theme.colors.quinary};
			}
			p {
				font-size: ${rem(18)};
				color: ${props => props.theme.colors.quartenary};
				margin-top: 4px;
			}
		}
		svg {
			margin-left: auto;
			color: ${props => props.theme.colors.senary};
		}
	}
`;
