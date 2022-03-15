import React, { useState, useEffect } from 'react';
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
    if (answer === notes[note]) {
        setCorrect(true)
        setCurrentScore(currentScore + 1)
        setNote(Math.floor(Math.random() * 85))
        if (currentScore > highScore) {
          setHighScore(currentScore)
        }
    } else {
        setCorrect(false)
        setCurrentScore(0)
    }
  }
  return (
    <>
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
        <button onClick={() => setAnswer(answer + '#')}>#</button>
        <button onClick={() => setAnswer(answer + 'b')}>b</button>
        <button onClick={() => handleSubmit()}>Submit!</button>
        <button>{note}</button>
      </div>
        {correct === true && <div>Correct</div>}
        {correct === false && <div>Incorrect</div>}
        Current Score: {currentScore}
        High Score: {highScore}
    </>
  )
}

export default Input;