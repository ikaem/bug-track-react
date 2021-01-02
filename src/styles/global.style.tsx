// src\styles\global.style.tsx

import { createGlobalStyle } from "styled-components";

import Montserrat300 from "../assets/fonts/montserrat-300.woff";
import Montserrat400 from "../assets/fonts/montserrat-400.woff";
import Montserrat700 from "../assets/fonts/montserrat-700.woff";
import Montserrat900 from "../assets/fonts/montserrat-900.woff";

const GlobalStyle = createGlobalStyle`
/* fonts */
@font-face {
    font-family: "Montserrat";
    font-style: normal;
    src: url(${Montserrat300}) format("woff");
    font-weight: 300;
    font-display: swap;
}

@font-face {
    font-family: "Montserrat";
    font-style: normal;
    src: url(${Montserrat400}) format("woff");
    font-weight: 400;
    font-display: swap;
}

@font-face {
    font-family: "Montserrat";
    font-style: normal;
    src: url(${Montserrat700}) format("woff");
    font-weight: 700;
    font-display: swap;
}

@font-face {
    font-family: "Montserrat";
    font-style: normal;
    src: url(${Montserrat900}) format("woff");
    font-weight: 900;
    font-display: swap;
}

html {
    font-family: 'Montserrat', Verdana, Tahoma, sans-serif;
    font-size: 100%;

    h1 {
        font-size: 2rem;
    }
    h2 {
        font-size: 1.5rem;
    }
    h3 {
        font-size: 1.25rem;
    }
    h4 {
        font-size: 1rem;
    }
}



/* reset */
*, *:after, *:before {
    box-sizing: border-box;
}

html, body, h1, h2, h3, h4, p, a, ul {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
}

img {
    display: block;
}

button, input, textarea, select, option,
button:focus, input:focus, textarea:focus, select:focus, option:focus {
    margin: 0;
    padding: 0;
    border: none;
    font: inherit;
    background-color: transparent;
    outline: none;
}
body, #root {
    height: 100%;
}

/* layout */

`;

export default GlobalStyle;
