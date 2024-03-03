import styled, { keyframes } from 'styled-components';

const slide = keyframes`
from {
	transform: translateX(-100%)
}
to {
	transform: translateX(0)
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
	animation: 120s ${slide} infinite linear;
`;
