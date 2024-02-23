import styled from 'styled-components';

export const CarInfoWrapper = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 274px;
`;

export const CarImageWrapper = styled.div`
	position: relative;
	margin-bottom: 14px;
	width: 274px;
	height: 268px;
	border-radius: 14px;
	overflow: hidden;
`;

export const CarImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const FavoriteButton = styled.button`
	position: absolute;
	top: 14px;
	right: 14px;
	border: none;
	background: transparent;
	cursor: pointer;

	&:hover {
		background: transparent;
		path {
			fill: #3470ff;
			stroke: #3470ff;
		}
	}
`;

export const CarNamePriceWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 8px;

	font-weight: 500;
	font-size: 16px;
	line-height: 1.5;
	color: #121417;
`;

export const CarNameYearText = styled.div`
	font-family: var(--font-family);
`;

export const HighlightedText = styled.span`
	font-family: var(--second-family);
	color: #3470ff;
`;

export const LearnMoreBtn = styled.button`
	border-radius: 12px;
	padding: 12px;
	width: 100%;
	height: 44px;
	border: none;
	cursor: pointer;
	
	background: #3470ff;
	transition: background 0.3s ease-out;

	font-family: var(--font-family);
	font-weight: 600;
	font-size: 14px;
	line-height: 143%;
	color: #fff;

	&:hover {
		background: #0b44cd;
	}
`;
