CREATE DATABASE cows;

USE cows;

CREATE TABLE cow (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name TEXT,
    description TEXT
);

/* mysql -u root < server/schema.sql */

