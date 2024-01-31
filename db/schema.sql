DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;
USE movie_db;
CREATE TABLE movies (
  movie_name VARCHAR(100) NOT NULL PRIMARY KEY,
  year_released INT,
  director VARCHAR(50)
);
CREATE TABLE reviews (
  review_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  movie_name VARCHAR(100),
  FOREIGN KEY (movie_name)
  REFERENCES movies(movie_name),
  reviewer_name VARCHAR(50),
  stars INT,
  review_text TEXT
  );