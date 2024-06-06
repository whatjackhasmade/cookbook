"use client";

import styled from "styled-components";

export const Title = styled.h1`
  font-size: 0.8rem;
  margin-bottom: 1rem;
  text-align: center;
  text-transform: uppercase;
  color: #999;
`;

export const Contents = styled.div`
  display: grid;
  margin-top: 2rem;
  width: 100%;
`;

export const Ingredients = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    list-style: none;
  }
`;
