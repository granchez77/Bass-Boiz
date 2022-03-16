import styled, { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  * {
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
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
  // position: relative
`

export const Dot = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(300%, -385%)
  // position: relative
`

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  background-color: #dedcde;
  margin: 0;
`
export const BassClef = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width:100%;
  height:auto;
`
export const CenterButton = styled.div`
  margin: 0;
  position: absolute;
  top: 27%;
  left: 50%;
  transform: translate(-50%, -0%);
`

export const CenterDiv = styled.div`
  margin: 0;
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Dot1 = styled.div`
  height: 20px;
  width: 20px;
  background-color: #4eb5f1;
  border-radius: 50%;
  display: inline-block;
  right: 1400px;
  top: 360px;
  // transform: translate(1500%, -1500%);
  position: absolute;
`

export const StopResize = styled.div`
  min-width: 600px;
`