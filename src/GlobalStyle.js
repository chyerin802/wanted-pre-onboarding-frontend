import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    line-height: 1.5;
  }

  h2, p {
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  button{
    cursor: pointer;
    background: none;
    border: none;
  }

  a{
    text-decoration: none;

    &:visited{
      text-decoration: none;
      color: none;
    }
  }

  li{
    list-style: none;
  }

  .hidden{
    visibility: hidden;
  }
  
  .App{
    background-color: var(--bg-color);
    width:100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }

  :root {

    /** color */
    --main-color: #4065F6;
    --second-color: #888888;
    --light-color: #E1E2E3;
  }         
`;

export default GlobalStyle;
