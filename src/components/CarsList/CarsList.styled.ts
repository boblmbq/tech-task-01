import styled from 'styled-components';

export const CarsListWrapper = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 50px 29px;
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
