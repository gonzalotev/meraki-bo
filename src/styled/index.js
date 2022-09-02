import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, :after, :before { box-sizing: border-box; }

  html, body, #root {
    margin: 0;
    height: 100vh;
    overflow: hidden;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
