"use client";

import styled from "styled-components";

export const Ingredients = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
	list-style: none;
	padding: 0;
	margin: 0;

	li {
		list-style: none;
	}
`;

export const Ingredient = styled.li`
	display: flex;
	align-items: center;

	label {
		margin: 0;
	}
`;

export const CheckAll = styled.button`
	padding: 0;
	border: none;
	background: none;
	text-decoration: underline;
`;
