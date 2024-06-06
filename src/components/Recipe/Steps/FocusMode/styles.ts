"use client";

import styled from "styled-components";

export const Step = styled.div<{
	$isCurrent?: true;
}>`
	font-size: 3rem;
	line-height: 1.1;
	text-align: center;
	color: white;
`;
