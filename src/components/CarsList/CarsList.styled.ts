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
	flex-wrap: wrap;
	gap: 4px 6px;
`;

export const DetailedInfoTextWrapper = styled.li`
	font-size: 12px;
	text-transform: capitalize;
	line-height: 1.5;
	color: rgba(18, 20, 23, 0.5);
	white-space: nowrap;
	padding-right: 6px;
	

	&:not(:last-child) {
		border-right: 1px solid rgba(18, 20, 23, 0.1);
	}

	&:first-child, &:last-child{
		padding-left: 0;
	}
`;
