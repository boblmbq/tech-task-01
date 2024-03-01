import styled, { keyframes } from 'styled-components';

const slide = keyframes`
from {
	transform: translateX(0)
}
to {
	transform: translateX(-100%)
}
`;

export const FooDiv = styled.div`
display: flex;
	overflow: hidden;
`;

export const InfiniteMovCardsWrapper = styled.div`
	width: max-content;
	white-space: nowrap;
	animation: 35s ${slide} infinite linear;
`;
