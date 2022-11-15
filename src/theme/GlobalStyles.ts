import { createGlobalStyle } from 'styled-components';
import Theme from './theme';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html{
        font-family: ${Theme.fonts.text};
        background-color: ${Theme.colors.bgColor};
        scroll-behavior: smooth;
    }

    h1{
        font-size: 48px;
        font-weight: bold;
        font-family: ${Theme.fonts.main};
    }
    h2{
        font-size: 40px;
        font-weight: bold;
        font-family: ${Theme.fonts.main};
    }
    h3{
        font-size: 24px;
        font-weight: bold;
        font-family: ${Theme.fonts.main};
    }

    p{
        font-size: 20px;
        color: ${Theme.colors.textColor};
    }

    a {
        font-size: 20px;
        font-weight: 600;
        transition: all ease-in-out 0.4s;
        color: ${Theme.colors.accentColor};
        text-decoration: none;
    }

    .button{
        background-color: ${Theme.colors.accentColor};
        color: ${Theme.colors.bgColor};
        width: max-content;
        padding: 2% 5%;
        border-radius: 30px;
        &:hover{
            background-color: ${Theme.colors.secondaryColor};
            color: ${Theme.colors.textColor};
        }
    }

  

`;

export default GlobalStyle;
