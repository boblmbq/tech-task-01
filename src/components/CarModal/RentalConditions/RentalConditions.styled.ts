import styled from 'styled-components';

export const ConditionsListWrapper = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	font-size: 12px;
	line-height: 1.5;
	letter-spacing: -0.02em;

	& li {
		display: flex;
		align-items: center;
		height: 32px;
		padding: 7px 14px;
		border-radius: 35px;
		background: #f9f9f9;

		& span{
			font-weight: 600;
			margin-left: 2px;
		}
	}
`;
