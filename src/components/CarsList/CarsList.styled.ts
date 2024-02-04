import styled from 'styled-components';

export const CarsListWrapper = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 50px 29px;
`;

export const CarInfoWrapper = styled.li`
	width: 274px;
`;

export const CarImageWrapper = styled.div`
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

export const CarNamePriceWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 8px;

	font-weight: 500;
	font-size: 16px;
	line-height: 1.5;
	color: #121417;

	& p {
		font-family: var(--font-family);
	}

	& span {
		font-family: var(--second-family);
		color: #3470ff;
	}
`;

export const DetailedInfoListsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;

	margin-bottom: 28px;
`;

export const DetailedInfoListWrapper = styled.ul`
	display: flex;
`;

export const DetailedInfoTextWrapper = styled.li`
	font-size: 12px;
	text-transform: capitalize;
	line-height: 150%;
	color: rgba(18, 20, 23, 0.5);
	white-space: nowrap;
	padding: 0 6px;

	&:not(:first-child) {
		border-left: 1px solid rgba(18, 20, 23, 0.1);
	}

	&:last-child {
		overflow: hidden;
		text-overflow: ellipsis;
	}

	&:first-child {
		padding-left: 0;
	}
`;

export const LearnMoreBtn = styled.button`
	border-radius: 12px;
	padding: 12px;
	width: 100%;
	height: 44px;
	background: #3470ff;
	border: none;
	cursor: pointer;
	transition: transform 0.3s ease-out;
	transform: translateZ(0);
	will-change: transform;

	font-family: var(--font-family);
	font-weight: 600;
	font-size: 14px;
	line-height: 143%;
	color: #fff;

	&:hover {
		transform: scale(1.01);
		background: #0b53ff;
	}
`;
