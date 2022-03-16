import React, { useState, useEffect } from 'react';
import { Button, GlobalStyles, CenterDiv, Dot1, Dot2, Dot3, Dot4, Dot5, Dot6, Dot7, Dot8, Dot9, Dot10, Dot11, Dot12, Dot13, Dot14, Dot15, Dot16, Dot17, Dot18, Dot19, Dot20, Dot21, Dot22, Dot23, Dot24, Dot25, Dot26, Dot27, Dot28, Dot29, Dot30, Dot31, Dot32, Dot33, Dot34, Dot35, Dot36, Dot37, Dot38, Dot39, Dot40, Dot41, Dot42 } from '../GlobalStyle.jsx';
import notes from '../notes.js';
import Dots from './Dots.jsx';

function Input() {
  const [answer, setAnswer] = useState('');
  const [note, setNote] = useState(Math.floor(Math.random() * 85))
  const [currentScore, setCurrentScore] = useState(0);
  const [correct, setCorrect] = useState();
  const [highScore, setHighScore] = useState(0);
  const handleChange = (event) => {
    event.persist();
    setAnswer(event.target.value)
  }
  const handleSubmit = (event) => {
    // event.persist();
    if (answer === notes[note] || answer === notes[note][0] || answer === notes[note][1]) {
        setCorrect(true)
        setCurrentScore(currentScore + 1)
        setNote(Math.floor(Math.random() * 85))
        if (currentScore > highScore) {
          setHighScore(currentScore + 1)
        }
    } else {
        setCorrect(false)
        setCurrentScore(0)
    }
  }
  return (
    <>
    {name === 1 && <Dot1 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 2 && <Dot2 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 3 && <Dot3 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 4 && <Dot4 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 5 && <Dot5 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 6 && <Dot6 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 7 && <Dot7 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 8 && <Dot8 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 9 && <Dot9 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 10 && <Dot10 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 11 && <Dot11 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 12 && <Dot12 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 13 && <Dot13 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 14 && <Dot14 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 15 && <Dot15 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 16 && <Dot16 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 17 && <Dot17 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 18 && <Dot18 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 19 && <Dot19 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 20 && <Dot20 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 21 && <Dot21 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 22 && <Dot22 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 23 && <Dot23 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 24 && <Dot24 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 25 && <Dot25 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 26 && <Dot26 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 27 && <Dot27 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 28 && <Dot28 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 29 && <Dot29 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 30 && <Dot30 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 31 && <Dot31 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 32 && <Dot32 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 33 && <Dot33 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 34 && <Dot34 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 35 && <Dot35 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 36 && <Dot36 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 37 && <Dot37 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 38 && <Dot38 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 39 && <Dot39 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 40 && <Dot40 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === 41 && <Dot41 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {name === '' && <Dot42 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    <CenterDiv>
      <div>
        Note:
        <input
          id='note'
          className='form-field'
          type='text'
          placeholder='Choose your note!'
          value={answer}
          onChange={handleChange}
        />
      </div>
      <div>
        <Button onClick={() => setAnswer(answer + '#')}>#</Button>
        <Button onClick={() => setAnswer(answer + 'b')}>b</Button>
        <Button onClick={() => handleSubmit()}>Submit!</Button>
        <Button>{note}</Button>
      </div>
        {correct === true && <div>Correct</div>}
        {correct === false && <div>Incorrect</div>}
        Current Score: {currentScore}
        High Score: {highScore}
      </CenterDiv>
    </>
  )
}

export default Input;