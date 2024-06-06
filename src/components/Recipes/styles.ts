"use client";

import styled from "styled-components";

export const Items = styled.section`
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export const Item = styled.article`
	position: relative;
	text-align: center;

	a {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;

		&:hover,
		&:focus-visible {
			background-color: rgba(255, 255, 255, 0.1);
		}
	}
`;

export const Title = styled.h2`
	margin-top: 1rem;
`;

export const Emojis = styled.span`
	font-size: 2rem;
`;
