DROP DATABASE IF EXISTS leaderboard;

CREATE DATABASE leaderboard;

\c leaderboard;

CREATE TABLE top_3 (
  id SERIAL PRIMARY KEY,
  name VARCHAR(10),
  score INTEGER
);

INSERT INTO top_3 (name, score) VALUES ('granchez77', 10);
INSERT INTO top_3 (name, score) VALUES ('CouldBeYou', 0);
INSERT INTO top_3 (name, score) VALUES ('CouldBeYou', 0);