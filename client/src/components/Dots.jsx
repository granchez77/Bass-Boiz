import React, { useState, useEffect } from 'react';
import { Button, GlobalStyles, CenterDiv, Dot1 } from '../GlobalStyle.jsx'

function Dots(props) {
  const [passedNote, setPassedNote] = useState(props.note)
  return (

     <Dot1 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>

  )
}

export default Dots;