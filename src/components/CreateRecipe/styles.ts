"use client";

import styled from "styled-components";

export const StepWrapper = styled.div`
	align-items: flex-end;
	display: flex;
	gap: 1rem;
`;

export const Remove = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	font-size: 1rem;
	border: 2px solid rgba(255, 255, 255, 0.2);
`;

export const VisuallyHidden = styled.span`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;
