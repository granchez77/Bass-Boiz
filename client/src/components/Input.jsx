import React, { useState, useEffect } from 'react';
import { Button, GlobalStyles, CenterDiv } from '../GlobalStyle.jsx'
import notes from '../notes.js'

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