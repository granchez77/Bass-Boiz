import React, { useState } from 'react';
import {LeaderBoardCentered, LeaderboardTitle} from '../GlobalStyle.jsx';
function Leaderboard() {
  return (
  <LeaderBoardCentered>
    <LeaderboardTitle>
      Leaderboard
    </LeaderboardTitle>
      <ul>
        <li>granchez77: 10</li>
        <li>User Score2</li>
        <li>User Score3</li>
      </ul>
    </LeaderBoardCentered>
  )
}

export default Leaderboard;