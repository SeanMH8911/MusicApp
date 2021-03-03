import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    &::-webkit-scrollbar{
        width:0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: darkgrey;
    }
}

body {
font-family:'Montserrat', sans-serif;
}
h1 {
    font-family: 'Rubik Mono One', sans-serif;
}
h2 {
     font-family:'Monoton', cursive;
}
`

export default GlobalStyles
