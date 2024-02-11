import styled from 'styled-components';
export { CarImage } from '../CarItem/CarItem.styled';

export const CarModalWrapper = styled.div`
	width: 541px;
	height: 752px;
	padding: 40px;
	border-radius: 24px;
	background: #fff;

	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const CarModalCloseButton = styled.button`
	position: absolute;
	top: 16px;
	right: 16px;
`;

export const CarImageModalWrapper = styled.div`
	width: 100%;
	height: 248px;
	margin-bottom: 14px;
	overflow: hidden;
	border-radius: 14px;
`;

export const CarNameYearText = styled.p`
	font-family: var(--font-family);
	font-weight: 500;
	font-size: 18px;
	line-height: 1.33;

	& span {
		font-family: var(--second-family);
		color: #3470ff;
	}
`;
