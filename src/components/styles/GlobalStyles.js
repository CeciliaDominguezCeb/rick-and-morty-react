import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  

    *{
        box-sizing: border-box;
        margin:0;
        padding: 0;
         
    }
    html{
        color: #fff;
        font-family: 'Anonymous Pro', monospace;
        font-size: 62.5%;
    }
    body {
        background-color: #000;
        background: url("/background.jpg")
        no-repeat center center fixed;
    
    }

`;

export default GlobalStyles;
