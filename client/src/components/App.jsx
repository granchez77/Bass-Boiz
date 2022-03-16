import React, { useState } from 'react';
import Input from './Input.jsx'
import { Button, Bass, Title, BassClef, CenterButton, Dot1, StopResize, Dot } from '../GlobalStyle.jsx'

function App() {
  const [playing, setPlaying] = useState(true);
  return (
    <StopResize>
      <Title>
      <BassClef src={`https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/bass-clef-music-1550-12800-550x550.png`} height={10} width={100} />
      Bass Boiz
      </Title>
      <CenterButton>
      <Button onClick={() => setPlaying(true)}>Play</Button>
      </CenterButton>
      <Bass src={`https://www.fmicassets.com/Damroot/ZoomJpg/10001/0374545506_gtr_frt_001_rl.jpg`} />
      {playing === true && <Input />}
    </StopResize>
  )
}

export default App;