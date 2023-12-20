
import { createGlobalStyle } from "styled-components";
export const GlobalStyled = createGlobalStyle`


  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Lato', sans-serif;
  }

  :root{
    font-family: 'Lato', sans-serif;
    /* Colors*/
    --cyan-400: #CEF5FD;
    --red-400: #FF4F53;
    --red-900: #A90E0E;
    --light-100: white;
    --light-200: whitesmoke;
    --alert-100:  #FD3974;
    --Dark-900:  rgb(2,0,36);
    --Gray-300: rgb(168, 168, 168);

    /*Gradients*/
    --gradient-header: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    
    /*Border Radius*/
    --rounded: 15px; 
    --roundedLight: 10px; 
    --roundedMedium: 20px;



    /*font size span*/
    --small: 20px;

  h1, h2, h3 , h4, h5, h6, input, select, option, button{
    font-family: 'Space Grotesk', sans-serif;
  

  --Box-Shadow01: 0px 2px 8px rgba(0, 0, 0, 0.25), 0px 0px 16px rgba(0, 0, 0, 0.1), inset 0px -1px 0px rgba(0, 0, 0, 0.25), inset 0px -2px 4px #000000, inset 0px 2px 6px rgba(255, 255, 255, 0.3), inset 0px 1px 2px rgba(255, 255, 255, 0.24);
  

  }

  body{
    display:inline;
    padding: 0.2rem;
    background: black;
    max-width: 1440px;
  }
  
  button {
  padding: 4px;
    box-shadow: var(--Box-Shadow01);
  }
  
  
  `