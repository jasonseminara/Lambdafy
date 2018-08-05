DELETE FROM users;
DELETE FROM playlists;

\c lambdify_db

INSERT INTO users ( username, full_name ) VALUES 
(
    'archivre',
    'Kenny Z'
);

INSERT INTO playlists ( playlist_name, spotify_uri ) VALUES 
(
    'mood',
    'spotify:user:spotify:playlist:37i9dQZF1DX3qCx5yEZkcJ'
);