import styled from 'styled-components';

export const Ul = styled.ul`
	display: flex;
	justify-content: space-between;
	width: 45%;
	margin: 0 auto;
	padding: 12px 114px;
	background-color: #3470ffe3;
	border-bottom-left-radius: 14px;
	border-bottom-right-radius: 14px;
`;

export const LinkWrapper = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	& a {
		font-size: 24px;
		color: white;
		text-decoration: none;
	}
`;
