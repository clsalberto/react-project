import { darken } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100vh;
    background: ${({ theme }) => theme.colors.bg};
    font-family: 'Muli', sans-serif;
    font-weight: 500;
    font-size: 16px;

    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.colors.grey};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secundary};
    font-weight: 600;

    &:hover {
      color: ${({ theme }) => darken(0.1, theme.colors.secundary)};
    }
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
