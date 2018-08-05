\c lambdify_db

DROP TABLE IF EXISTS playlists;
DROP INDEX IF EXISTS playlists_playlistName;
DROP TABLE IF EXISTS users;
DROP INDEX IF EXISTS users_username;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP,
    last_on TIMESTAMP DEFAULT NOW()
);

CREATE INDEX users_username ON users (username);

CREATE TABLE playlists (
    id SERIAL PRIMARY KEY,
    playlist_name VARCHAR(255) NOT NULL,
    spotify_uri VARCHAR(255) NOT NULL,
    users_username VARCHAR(255) REFERENCES users (username),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX playlists_playlistName ON playlists (playlist_name);