import { createGlobalStyle } from "styled-components";
import { colors } from "./UI/colors";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  :root {
    font-size: 62.5%;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  button {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  body {
    width: 100%;
    height: 100vh;
    background-color: ${colors["gray-dark"]}
  }

  main {
    background-color: ${colors["blue-dark"]};
    padding: 3.8rem;
    width: 26rem;
    margin-inline: auto;
    border-radius: 9.6px;
    margin-top: 6rem;
    top: 6rem;
  }

  section {
    margin-bottom: 2.8rem;
  }
  
`