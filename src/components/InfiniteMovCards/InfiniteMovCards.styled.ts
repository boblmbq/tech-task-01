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
	height: 250px;
	&:hover div {
		animation-play-state: paused;
	}
`;

export const InfiniteMovCardsWrapper = styled.div`
	white-space: nowrap;
	animation: 40s ${slide} infinite linear;
	z-index: 1000;
`;
