import { rem } from 'polished';
import styled from 'styled-components';

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	a {
		display: flex;
		align-items: center;
		color: ${props => props.theme.colors.quartenary};
		&:hover {
			transition: color 0.4s;
			color: ${props => props.theme.colors.septenary};
		}
		svg {
			margin-right: 4px;
		}
	}
`;

export const RepositoryInfo = styled.section`
	margin-top: 80px;
	header {
		display: flex;
		align-items: center;
		img {
			width: 120px;
			height: 120px;
			border-radius: 50%;
		}
		div {
			margin-left: 24px;
			strong {
				font-size: ${rem(36)};
				color: ${props => props.theme.colors.quinary};
			}
			p {
				font-size: ${rem(18)};
				color: ${props => props.theme.colors.quartenary};
				margin-top: 4px;
			}
		}
	}
	ul {
		display: flex;
		margin-top: 40px;

		li {
			strong {
				display: block;
				font-size: ${rem(36)};
				color: ${props => props.theme.colors.quinary};
			}
			span {
				display: block;
				font-size: ${rem(36)};
				color: ${props => props.theme.colors.septenary};
			}
			& + li {
				margin-left: 80px;
			}
		}
	}
`;

export const Issues = styled.div`
	margin-top: 80px;
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
		div {
			flex: 1;
			margin: 0 16px;
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
