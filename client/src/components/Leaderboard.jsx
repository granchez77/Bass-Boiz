import React, { useState, useEffect } from 'react';
import {LeaderBoardCentered, LeaderboardTitle} from '../GlobalStyle.jsx';
import axios from 'axios';


function Leaderboard() {
  const [leaderboard0, setLeaderboard0] = useState(['name', 'score']);
  const [leaderboard1, setLeaderboard1] = useState(['name', 'score']);
  const [leaderboard2, setLeaderboard2] = useState(['name', 'score']);

  useEffect(() => {
    axios({
      method: 'get',
      url: '/leaderboard'
    })
    .then((res) => {
      let scores = res.data.rows;

      setLeaderboard0(
       [scores[0].name, scores[0].score]
      );
      setLeaderboard1(
       [scores[1].name, scores[1].score]
      );
      setLeaderboard2(
       [scores[2].name, scores[2].score]
      )
    })
  }, []);
  return (

  <LeaderBoardCentered>
    <LeaderboardTitle>
      Leaderboard
    </LeaderboardTitle>
      <ul>
        <li>{leaderboard0[0]}: {leaderboard0[1]}</li>
        <li>{leaderboard1[0]}: {leaderboard1[1]}</li>
        <li>{leaderboard2[0]}: {leaderboard2[1]}</li>
      </ul>
    </LeaderBoardCentered>
  )
}

export default Leaderboard;