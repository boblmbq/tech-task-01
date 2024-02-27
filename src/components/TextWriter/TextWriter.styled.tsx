import styled, { keyframes } from 'styled-components';

const cursor = keyframes`
	50% { border-color: transparent}
`;

const typing = keyframes`
from {width: 0}`;

export const TextWriterContainer = styled.div`
	display: inline-block;
`;

export const Text = styled.p`
	font-size: 58px;
	line-height: 1.31;
	color: #121417;

	
	letter-spacing: 10px;
	border-right: 5px solid;
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
	animation-timing-function: easy-out;
	animation: ${typing} 2s steps(19), ${cursor} 0.4s step-end infinite alternate;
`;
