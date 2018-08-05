\c lambdify_db

DROP TABLE IF EXISTS playlists;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    last_on TIMESTAMP DEFAULT NOW()
);

CREATE TABLE playlists (
    id SERIAL PRIMARY KEY,
    playlist_name VARCHAR(255) NOT NULL,
    spotify_uri VARCHAR(255) NOT NULL,
    users_username VARCHAR(255) REFERENCES users (username),
    created_at TIMESTAMP DEFAULT NOW()
);