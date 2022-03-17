import React, { useState, useEffect } from 'react';
import { Button, GlobalStyles, CenterDiv, Form, slightRight, Correct, Incorrect, MiddleSpacing, Dot1, Dot2, Dot3, Dot4, Dot5, Dot6, Dot7, Dot8, Dot9, Dot10, Dot11, Dot12, Dot13, Dot14, Dot15, Dot16, Dot17, Dot18, Dot19, Dot20, Dot21, Dot22, Dot23, Dot24, Dot25, Dot26, Dot27, Dot28, Dot29, Dot30, Dot31, Dot32, Dot33, Dot34, Dot35, Dot36, Dot37, Dot38, Dot39, Dot40, Dot41, Dot42, Dot43, Dot44, Dot45, Dot46, Dot47, Dot48, Dot49, Dot50, Dot51, Dot52, Dot53, Dot54, Dot55, Dot56, Dot57, Dot58, Dot59, Dot60, Dot61, Dot62, Dot63, Dot64, Dot65, Dot66, Dot67, Dot68, Dot69, Dot70, Dot71, Dot72, Dot73, Dot74, Dot75, Dot76, Dot77, Dot78, Dot79, Dot80, Dot81, Dot82, Dot83, Dot84} from '../GlobalStyle.jsx';
import notes from '../notes.js';
import Dots from './Dots.jsx';

function Input() {
  const [answer, setAnswer] = useState('');
  const [note, setNote] = useState(Math.floor(Math.random() * 85))
  // const [note, setNote] = useState(59)
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
    {note === 1 && <Dot1 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 2 && <Dot2 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 3 && <Dot3 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 4 && <Dot4 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 5 && <Dot5 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 6 && <Dot6 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 7 && <Dot7 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 8 && <Dot8 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 9 && <Dot9 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 10 && <Dot10 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 11 && <Dot11 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 12 && <Dot12 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 13 && <Dot13 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 14 && <Dot14 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 15 && <Dot15 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 16 && <Dot16 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 17 && <Dot17 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 18 && <Dot18 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 19 && <Dot19 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 20 && <Dot20 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 21 && <Dot21 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 22 && <Dot22 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 23 && <Dot23 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 24 && <Dot24 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 25 && <Dot25 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 26 && <Dot26 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 27 && <Dot27 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 28 && <Dot28 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 29 && <Dot29 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 30 && <Dot30 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 31 && <Dot31 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 32 && <Dot32 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 33 && <Dot33 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 34 && <Dot34 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 35 && <Dot35 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 36 && <Dot36 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 37 && <Dot37 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 38 && <Dot38 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 39 && <Dot39 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 40 && <Dot40 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 41 && <Dot41 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 42 && <Dot42 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 43 && <Dot43 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 44 && <Dot44 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 45 && <Dot45 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 46 && <Dot46 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 47 && <Dot47 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 48 && <Dot48 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 49 && <Dot49 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 50 && <Dot50 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 51 && <Dot51 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 52 && <Dot52 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 53 && <Dot53 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 54 && <Dot54 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 55 && <Dot55 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 56 && <Dot56 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 57 && <Dot57 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 58 && <Dot58 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 59 && <Dot59 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 60 && <Dot60 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 61 && <Dot61 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 62 && <Dot62 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 63 && <Dot63 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 64 && <Dot64 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 65 && <Dot65 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 66 && <Dot66 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 67 && <Dot67 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 68 && <Dot68 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 69 && <Dot69 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 70 && <Dot70 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 71 && <Dot71 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 72 && <Dot72 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 73 && <Dot73 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 74 && <Dot74 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 75 && <Dot75 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 76 && <Dot76 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 77 && <Dot77 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 78 && <Dot78 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 79 && <Dot79 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 80 && <Dot80 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 81 && <Dot81 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 82 && <Dot82 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 83 && <Dot83 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    {note === 84 && <Dot84 src={`https://pngimg.com/uploads/dot/dot_PNG40.png`}/>}
    <CenterDiv>
      <div>
        <Form
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
        {/* <Button>{note}</Button> */}
      </div>
        <div>
        Current Score: {currentScore}
        </div>
        <slightRight>
        High Score: {highScore}
        </slightRight>
        <MiddleSpacing>
        {correct === true && <Correct>Correct!</Correct>}
        {correct === false && <Incorrect>Try Again!</Incorrect>}
        </MiddleSpacing>
      </CenterDiv>
    </>
  )
}

export default Input;