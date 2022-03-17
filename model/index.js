const db = require('../db');

module.exports = {
  getLeaderboard: (callback) => {
    const syntax = `SELECT * FROM top_3 ORDER BY score DESC LIMIT 3`
    db.query(syntax, (err, top_3) => {
      if (err) {
        callback(err);
      } else {
        callback(null, top_3);
      }
    })
  },

  postLeaderboard: (score, callback) => {
    const syntax = 'INSERT INTO top_3 (name, score) VALUES(?, ?)';
    const newScore =
    db.query(syntax, score, (err, movies) => {
      if (err) {
        callback(err);
      } else {
        callback(null, score);
      }
    })
  }
}