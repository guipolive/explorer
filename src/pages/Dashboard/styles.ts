import styled, {css} from 'styled-components';
import {shade} from 'polished';

interface FormProps {
	hasError: boolean;
}

export const Title = styled.h1`
	font-size: 48px;
	color:  #3a3a3a;

	margin-top: 56px;
	max-width: 450px;
`;

export const Form = styled.form<FormProps>`
	margin-top: 40px;
	max-width: 700px;
	display: flex;
	background-color: #FFFFFF;

	input {
		flex: 1;
		padding: 0 24px;
		height: 70px;
		border: 1px;
		border-radius: 5px 0px 0px 5px;

		${props => props.hasError && css`
			border: 2px solid #c53030;
			border-right: 0;
		`}

		&::placeholder {
			color: A8A8B3;
		}
	}


	button {
		width: 210px;
		background-color: #04D361;
		color: #FFFFFF;
		border: 0;
		border-radius: 0 5px 5px 0;
		font-weight: bold;
		transition: background-color .2s;

		&:hover {
			background: ${shade(0.2, '#04D361')};
		}
	}
`;

export const Repositories = styled.div`
	max-width: 700px;
	margin-top: 120px;

	a {
		background: #ffffff;
		border-radius: 5px;
		width: 100%;
		padding: 24px;
		text-decoration: none;
		transition: transform .2s;

		display: flex;
		align-items: center;
		justify-content: flex-start;

		&:hover {
			transform: translateX(10px);
		}

		&:not(:first-child) {
			margin-top: 16px;
		}

		img {
			width: 83px;
			height: 83px;
			border-radius: 50%;
		}

		div.info {
			margin-left: 22px;
			flex: 1;

			strong {
				color: #3D3D4D;
				font-size: 24px;
			}

			p {
				margin-top: 4px;
				color: #A8A8B3;
			}
		}

		svg {
			margin-left: auto;
			color: #C9C9D4;
		}
	}
`;

export const Error = styled.span`
	display: block;
	color: #c53030;
	margin-top: 20px;
`;
