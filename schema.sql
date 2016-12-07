-- Create CheapoMail database

DROP DATABASE IF EXISTS cheapomail;
CREATE DATABASE cheapomail;
USE cheapomail;

-- Creating User table

CREATE TABLE User (
id int NOT NULL UNIQUE AUTO_INCREMENT,
firstname varchar(255) NOT NULL,
lastname varchar(255) NOT NULL,
username varchar(255) NOT NULL,
password varchar(255) NOT NULL
);

-- Create Message table
CREATE TABLE Message (
id int NOT NULL UNIQUE AUTO_INCREMENT,
recipient_ids int NOT NULL UNIQUE,
user_id int NOT NULL UNIQUE,
subject varchar(255),
message_body TEXT,
date_sent DATE NOT NULL
);

-- Message read table
CREATE TABLE Message_read (
id int NOT NULL UNIQUE,
message_id int NOT NULL UNIQUE,
reader_id int NOT NULL UNIQUE,
date_read DATE NOT NULL
);

-- Test User
-- INSERT INTO User VALUES ("John", "Doe", "johnny", "password");