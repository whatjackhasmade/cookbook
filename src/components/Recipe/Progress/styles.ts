"use client";

import styled from "styled-components";

export const Stages = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #111;
`;

export const Stage = styled.button<{
  $isCurrent: boolean;
}>`
  background: ${(props) => (props.$isCurrent ? "#212121" : "#111")};
  margin: 0;
  border: none;
  border-radius: 0;
`;

export const StageTitle = styled.span`
  display: block;
`;

export const Meta = styled.span`
  display: block;
  color: #999;
  font-size: 0.8rem;
`;
