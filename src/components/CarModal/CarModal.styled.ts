import styled from 'styled-components';
export { CarImage } from '../CarItem/CarItem.styled';

export const CarModalWrapper = styled.div`
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	display: flex;
	flex-direction: column;
	gap: 14px;

	width: 540px;
	height: 750px;
	padding: 40px;
	border-radius: 24px;
	background: #fff;
`;

export const CarModalInnerWrapper = styled.div`
	display: flex;
	flex-grow: 3;
	flex-direction: column;
	justify-content: space-between;
`;

export const CarModalCloseButton = styled.button`
	position: absolute;
	top: 16px;
	right: 16px;
	cursor: pointer;
	border: none;
	background: transparent;
`;

export const CarModalImageWrapper = styled.div`
	width: 100%;
	height: 248px;
	overflow: hidden;
	border-radius: 14px;
`;

export const CarModalNameYearText = styled.h1`
	font-family: var(--font-family);
	font-weight: 500;
	font-size: 18px;
	line-height: 1.33;
	margin-bottom: 8px;
`;

export const DescriptionModalWrapper = styled.p`
	font-size: 14px;
	line-height: 1.43;
`;

export const CategoriesModalTitleWrapper = styled.h2`
	font-weight: 500;
	font-size: 14px;
	line-height: 1.43;
	margin-bottom: 8px;
`;

export const RentalCarModalButton = styled.button`
	font-weight: 500;
	font-size: 14px;
	line-height: 1.43;
	color: #fff;

	width: 168px;
	height: 44px;
	padding: 12px 50px;
	background: #3470ff;
	cursor: pointer;
	border: none;
	border-radius: 12px;
`;
