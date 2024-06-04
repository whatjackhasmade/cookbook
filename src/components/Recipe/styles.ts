"use client";

import styled from "styled-components";

export const Contents = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
	width: 100%;
`;

export const Banner = styled.div`
	margin: 2rem 0;
	height: 300px;
	position: relative;
	margin-left: calc(-50vw + 50%);
	margin-right: calc(-50vw + 50%);
	width: 100vw;

	img {
		height: 100%;
		width: 100%;
		position: absolute;
		object-fit: cover;
		top: 0;
		left: 0;
	}
`;

export const Ingredients = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;

	li {
		list-style: none;
	}
`;
