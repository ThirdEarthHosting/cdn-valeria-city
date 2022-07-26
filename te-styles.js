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
    .txt-success {
        color: green;
    }
    .txt-error {
        color: red;
    }
    .btn-area {
        ${flexBox};
        margin: 60px auto;
      }
    .custom-btn{
        padding: 0px 0px !important;
    }
    .btn-navbar{
        width: 162px;
        text-align: center;
        color: red;
    }
    .arrowgif{
        width: 40px;
        height: 40px;
        margin-top: 0;
    }
    .logo-navbar{
        width: 10rem;
    }
    .errorForField{
        color: #9009;
        margin: 5px 0;
    }
    .error{
        padding: 10px;
        width: 100%;
        margin: auto;
        background-color: none;
        border: solid 1px #9007;
        color: #9007;
        border-radius: 4px;
        margin-bottom: 15px;
    }
    .info{
        padding: 10px;
        width: 100%;
        background-color: none;
        border: solid 1px #0097;
        color: #0097;
        border-radius: 4px;
        margin-bottom: 15px;
    }
    .success{
        padding: 10px;
        width: 100%;
        background-color: none;
        border: solid 1px #0907;
        color: #0907;
        border-radius: 4px;
        margin-bottom: 35px;
    }
    .center {
        width: 100%;
        margin: 0 !important;
        padding: 0 !important;
        margin-left: -50px !important;
    } 
    .slick-prev:before,
    .slick-next:before {
        color: black;
    }
    .btnLetsGo{
        width: ${(props) => (props.full ? "100%" : null)};
        text-transform: uppercase;
        min-width: 100px;
        border: solid 1px #fff;
        border-radius: 4px;
        padding: 8px 35px;
        outline: none;
        background: none;
        color: #fff;
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        margin: 5px;
        &:hover { background-color: #0002; }
    }
    .p-TermsText{
        color: #fff;
        z-index: 200;
      background: yellow;
      height: 50px;
    }
    .provisioning{
        margin: 10px 0;
    }
    .card-spinner{
        background-color: red !important;
    }
`;
