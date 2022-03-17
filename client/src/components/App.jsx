import React, { useState, useEffect } from 'react';
import Input from './Input.jsx';
import Leaderboard from './Leaderboard.jsx';
import axios from 'axios';
import { Button, Bass, Title, BassClef, CenterButton, Dot1, StopResize, PlayButton } from '../GlobalStyle.jsx'

function App() {
  const [playing, setPlaying] = useState(false);
  return (
    <StopResize>
      <Title>
      <BassClef src={`https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/bass-clef-music-1550-12800-550x550.png`} height={10} width={100} />
      Bass Boiz
      </Title>
      <CenterButton>
      <PlayButton onClick={() => setPlaying(true)}>Play</PlayButton>
      </CenterButton>
      <Bass src={`https://www.fmicassets.com/Damroot/ZoomJpg/10001/0374545506_gtr_frt_001_rl.jpg`} />
      {playing === true && <Input />}
      {playing === true && <Leaderboard />}
    </StopResize>
  )
}

export default App;