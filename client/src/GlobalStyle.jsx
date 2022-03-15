import styled, { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  * {
    @import url(https://fonts.googleapis.com/css?family=Oswald|Roboto)
  }
`
export const Button = styled.button`
   display:inline-block;
   padding:0.3em 1.2em;
   margin:0 0.3em 0.3em 0;
   border-radius:2em;
   box-sizing: border-box;
   text-decoration:none;
   font-family:'Roboto',sans-serif;
   font-weight:300;
   color:#FFFFFF;
   background-color:#4eb5f1;
   text-align:center;
   transition: all 0.2s;

   &:hover{
    background-color:#4095c6;
    cursor: pointer;
   }
  // @media all and (max-width:30em){
  //  a.button3{
  //   display:block;
  //   margin:0.2em auto;
  //  }
  `;

export const Bass = styled.img`
  max-width:100%;
  height:auto;
`