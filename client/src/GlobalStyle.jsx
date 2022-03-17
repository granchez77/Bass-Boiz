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
  `;
  export const PlayButton = styled.button`
   display:inline-block;
   font-size: 25px;
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
   `;

export const Bass = styled.img`
  max-width:100%;
  height:auto;
  // position: relative
`

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  background-color: #dedcde;
  margin: 0;
`
export const LeaderboardTitle = styled.h1`
text-decoration: underline;
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
  top: 17%;
  left: 50%;
  transform: translate(-50%, -0%);
`

export const CenterDiv = styled.div`
  margin: 0;
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family:'Roboto',sans-serif;
  font-weight:300;
`
export const LeaderBoardCentered = styled.div`
  margin: 0;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family:'Roboto',sans-serif;
  font-weight:300;
`
export const MiddleSpacing = styled.div`
  padding-top: 5px;
`

export const StopResize = styled.div`
  min-width: 600px;
  font-family:'Roboto',sans-serif;
  font-weight:300;
`
export const Form = styled.input`
  background: #ecf0f3;
  padding: 10px;
  padding-left: 20px;
  height: 10px;
  font-size: 14px;
  border-radius: 50px;
  font-family:'Roboto',sans-serif;
  font-weight:300;
`
export const slightRight = styled.div`
transform: translate(-50%, 0%);
padding-left: 20px;
`
export const Correct = styled.div`
 border-radius:2em;
 box-sizing: border-box;
 text-decoration:none;
 font-family:'Roboto',sans-serif;
 font-weight:300;
 color:#000000;
 background-color:#90EE90;
 text-align:center;
`
export const Incorrect = styled.div`
 border-radius:2em;
 box-sizing: border-box;
 text-decoration:none;
 font-family:'Roboto',sans-serif;
 font-weight:300;
 color:#FFFFFF;
 background-color:#f06262;
 text-align:center;
`

export const Dot1 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(300%, -390%)
`

export const Dot2 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(412%, -390%)
`
export const Dot3 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(490%, -390%)
`
export const Dot4 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(550%, -390%)
`

export const Dot5 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(630%, -390%)
`

export const Dot6 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(697%, -390%)
`
export const Dot7 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(757%, -390%)
`
export const Dot8 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(816%, -393%)
`
export const Dot9 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(870%, -393%)
`
export const Dot10 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(922%, -395%)
`
export const Dot11 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(970%, -396%)
`
export const Dot12 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1015%, -396%)
`
export const Dot13 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1060%, -396%)
`
export const Dot14 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1101%, -397%)
`
export const Dot15 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1139%, -397%)
`
export const Dot16 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1176%, -397%)
`
export const Dot17 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1211%, -397%)
`
export const Dot18 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1244%, -399%)
`
export const Dot19 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1274%, -399%)
`
export const Dot20 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1305%, -399%)
`
export const Dot21 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1335%, -399%)
`
//END OF E STRING
export const Dot22 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(300%, -370%)
`
export const Dot23 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(412%, -370%)
`
export const Dot24 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(490%, -370%)
`
export const Dot25 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(563%, -370%)
`
export const Dot26 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(630%, -370%)
`
export const Dot27 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(697%, -370%)
`
export const Dot28 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(757%, -370%)
`
export const Dot29 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(816%, -372%)
`
export const Dot30 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(870%, -372%)
`
export const Dot31 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(922%, -373%)
`
export const Dot32 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(970%, -373%)
`
export const Dot33 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1016%, -372%)
`
export const Dot34 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1060%, -372%)
`
export const Dot35 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1101%, -373%)
`
export const Dot36 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1139%, -373%)
`
export const Dot37 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1176%, -373%)
`
export const Dot38 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1211%, -373%)
`
export const Dot39 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1244%, -373%)
`
export const Dot40 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1274%, -373%)
`
export const Dot41 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1305%, -373%)
`
export const Dot42 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1332%, -373%)
`
//END OF A STRING
export const Dot43 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(300%, -352%)
`
export const Dot44 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(412%, -352%)
`
export const Dot45 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(490%, -352%)
`
export const Dot46 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(563%, -352%)
`
export const Dot47 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(630%, -352%)
`
export const Dot48 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(697%, -350%)
`
export const Dot49 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(757%, -350%)
`
export const Dot50 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(816%, -350%)
`
export const Dot51 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(870%, -350%)
`
export const Dot52 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(922%, -350%)
`
export const Dot53 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(970%, -350%)
`
export const Dot54 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1016%, -347%)
`
export const Dot55 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1060%, -347%)
`
export const Dot56 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1101%, -347%)
`
export const Dot57 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1139%, -347%)
`
export const Dot58 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1176%, -347%)
`
export const Dot59 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1211%, -347%)
`
export const Dot60 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1244%, -347%)
`
export const Dot61 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1274%, -347%)
`
export const Dot62 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1305%, -347%)
`
export const Dot63 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1332%, -347%)
`
//END OF D STRING

export const Dot64 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(300%, -332%)
`
export const Dot65 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(412%, -332%)
`
export const Dot66 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(490%, -332%)
`
export const Dot67 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(563%, -332%)
`
export const Dot68 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(630%, -327%)
`
export const Dot69 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(697%, -326%)
`
export const Dot70 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(757%, -325%)
`
export const Dot71 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(816%, -324%)
`
export const Dot72 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(870%, -324%)
`
export const Dot73 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(922%, -324%)
`
export const Dot74 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(970%, -324%)
`
export const Dot75 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1016%, -324%)
`
export const Dot76 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1060%, -324%)
`
export const Dot77 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1101%, -324%)
`
export const Dot78 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1139%, -323%)
`
export const Dot79 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1176%, -323%)
`
export const Dot80 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1211%, -323%)
`
export const Dot81 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1244%, -323%)
`
export const Dot82 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1274%, -323%)
`
export const Dot83 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1305%, -322%)
`
export const Dot84 = styled.img`
  max-width:5%;
  height:auto;
  transform: translate(1332%, -321%)
`