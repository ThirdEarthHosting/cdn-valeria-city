import { createGlobalStyle, css } from "styled-components";

const flexBox = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GlobalStyle = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
        outline: default !important;
        /* outline: 1px solid red;  */
        box-sizing: border-box;
        /* overflow-x: hidden; */
    }
    a{
        text-decoration: none !important;
    }
    //Default Colors
    :root {
        --primary: #3772a9;
        --primary-light: #1485b3;
        --primary-lighter: #5094f2;
        --secondary: #3aa66e;
        --secondary-light: #7dd95e;
        --secondary-lighter: #53e3a1;
        --tertiary: #f6e363;
        --white: #fff;
        --dark: #585858;
        --gray: #A9A9A9;
        --light-gray: #eee;
        --blue: #2f8bfd;
        --light-dark: #dedede;
        --hover: #0002;
        --hover-secondary: #30be75;
    }

    html, body{
        height: 100% !important;
        min-height: 100%;
        background-color: red ;
    }
    body {
        font-size: 16px;
        overflow-x: hidden;
        max-width: 100%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        color: #333;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;
