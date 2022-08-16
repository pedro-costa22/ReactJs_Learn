import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        background: #3936C0;
        font-family: "Poppins", sans-serif;
    }

    

`;

export default GlobalStyle;