const db = require('../db');
const model = require('../model');

module.exports = {
  getLeaderboard: (req, res) => {
    model.getLeaderboard((err, top_3) => {
      if(err) {
        res.status(500).send();
      } else {
        res.send(top_3);
      }
    })
  },

  postLeaderboard: (req, res) => {
    model.postLeaderboard(req, (err, score) => {
      if (err) {
        res.status(500).send();
      } else {
        res.send(score);
      }
    })
  }
}