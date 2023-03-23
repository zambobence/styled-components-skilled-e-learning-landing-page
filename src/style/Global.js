import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    };
    
    button,
    a {
        text-decoration: none;
        color: inherit;
        font-size: inherit;
    };
    body {
        background-image: linear-gradient(180deg, #FFFFFF 0%, #F0F1FF 100%);
        background-repeat: no-repeat;
        background-size: cover;
    }



    `
export default GlobalStyle;