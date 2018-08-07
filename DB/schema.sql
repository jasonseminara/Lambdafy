DROP DATABASE IF EXISTS lambdify_db;
CREATE DATABASE lambdify_db;

\c lambdify_db

DROP TABLE IF EXISTS playlists;
DROP INDEX IF EXISTS playlists_playlistId;
DROP INDEX IF EXISTS playlists_byUser;
DROP TABLE IF EXISTS users;
DROP INDEX IF EXISTS users_userId;

CREATE TABLE users (
    userId SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    last_on TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX users_userId ON users (userId);

CREATE TABLE playlists (
    playlistId SERIAL PRIMARY KEY NOT NULL,
    playlist_name VARCHAR(255) NOT NULL,
    spotify_uri VARCHAR(255) NOT NULL,
    by_user INTEGER REFERENCES users (userId),
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX playlists_playlistId ON playlists (playlistId);
CREATE INDEX playlists_byUser ON playlists (by_user);