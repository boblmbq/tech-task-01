import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const EmptyFavoritesWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 24px;
height: 60%;
`

export const Text = styled.p`
	font-size: 24px;
	color: #121417;
`;

export const LinkTo = styled(Link)`
	text-decoration: underline;
	color: #3470ff;
`;
