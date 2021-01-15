import styled  from 'styled-components';
import {shade} from 'polished';

export const Header = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #A8A8B3;
		font-weight: bold;
		text-decoration: none;
		transition: color .2s;

		&:hover {
			color: ${shade(0.2, '#A8A8B3')}
		}

		span {
			margin-left: 5px;
		}
	}
`;

export const RepositoryInfo = styled.div`
	width: 100%;
	margin-top: 80px;

	header {
		display: flex;
		align-items: center;

		img {
			width: 120px;
			height: 120px;
			border-radius: 50%;
		}

		.repository-description {
			margin-left: 20px;

			strong {
				font-size: 36px;
				color: #3D3D4D;
			}

			p {
				color: #737380;
				font-size: 20px;
				margin-top: 12px;
				max-width: 695px;
			}
		}
	}

	ul {
		margin-top: 65px;
		display: flex;
		align-items: flex-start;

		li + li {
			margin-left: 80px;
		}

		li {
			list-style: none;

			strong {
				color: #3D3D4D;
				font-size: 36px;
			}

			span {
				display: block;
				color: #6C6C80;
				font-size: 20px;
				margin-top: 5px;
			}
		}
	}
`;

export const Issues = styled.div`
	width: 100%;
	margin-top: 80px;

	.issue + .issue {
		margin-top: 16px;
	}

	.issue {
		width: 100%;
		padding: 25px;
		background-color: #FFF;
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-decoration: none;

		transition: transform .2s;

		&:hover {
			transform: translateX(5px);
		}

		&__information {
			strong {
				font-size: 24px;
				color: #3D3D4D;
			}

			span {
				color: #A8A8B3;
				margin-top: 8px;
				font-size: 18px;
				display: block;
			}

		}

		svg {
			color: #C9C9D4;
		}
	}
`;
