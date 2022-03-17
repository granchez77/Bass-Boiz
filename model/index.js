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
  }
}