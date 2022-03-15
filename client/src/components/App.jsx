import React, { useState } from 'react';
import Input from './Input.jsx'

function App() {
  const [playing, setPlaying] = useState(false);
  return (
    <div>
      <h1>
      <img src={`https://hellomusictheory.com/wp-content/uploads/2019/04/bass-clef-1024x682.png`} height={100} width={140} />
      Bass Boiz
      </h1>
      <button onClick={() => setPlaying(true)}>Play</button>
      <img src={`https://www.fmicassets.com/Damroot/ZoomJpg/10001/0374545506_gtr_frt_001_rl.jpg`} />
      {playing === true && <Input />}
    </div>
  )
}

export default App;