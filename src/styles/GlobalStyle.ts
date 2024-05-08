import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`

${({ theme }) => css`
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
  }

  ::view-transition,
  ::view-transition-group(root),
  ::view-transition-image-pair(root),
  ::view-transition-old(root),
  ::view-transition-new(root) {
    height: 100vh;
    overflow: hidden;
    z-index: 9999;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
  }

  #root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
    position: relative;
  }

  html {
    font-size: 1.1rem;
    scroll-behavior: smooth;
    overflow-y: auto;
  }

  body {
    background-color: ${theme.bg[100]};
    color: ${theme.text[100]};
  }

  body::-webkit-scrollbar {
    width: 9px;
    background-color: #383838;
  }
  body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #6b6b6b;
  }
  body::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #383838;
  }
`}
`;

export default GlobalStyle;
