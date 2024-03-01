import styled, { keyframes } from 'styled-components';

const cursor = keyframes`
	50% { border-color: transparent}
`;

const typing = keyframes`
from {width: 0}`;

export const TextWriterContainer = styled.div`
	display: inline-block;
`;

export const Text = styled.h1`
	font-size: 58px;
	font-weight: 400;
	line-height: 1.31;
	color: #121417;

	
	// letter-spacing: 10px;
	// border-right: 5px solid;
	// width: 100%;
	// white-space: nowrap;
	// overflow: hidden;
	// animation-timing-function: easy-out;
	// animation: ${typing} 2s steps(19), ${cursor} 0.4s step-end infinite alternate;
`;
