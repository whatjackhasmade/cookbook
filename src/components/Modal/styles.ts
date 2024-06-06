"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const Backdrop = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Wrapper = styled(motion.div)`
	background-color: rgb(0, 0, 0);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 50rem;
	padding: 2rem;
`;

export const Close = styled.button`
	background: none;
	border: none;
	color: white;
	cursor: pointer;
	margin-left: auto;
`;
