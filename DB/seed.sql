DELETE FROM users;
DELETE FROM playlists;

\c lambdify_db

INSERT INTO users ( username, full_name ) VALUES 
(
    'archivre',
    'Kenny Z'
),
(
    'initialtiming',
    'Kendrick Z'
),
(
    'le7elseven',
    'Ken Z'
),
(
    'autopilot',
    'Kenny'
);

INSERT INTO playlists ( playlist_name, spotify_uri ) VALUES 
(
    'mood',
    'spotify:user:spotify:playlist:37i9dQZF1DX3qCx5yEZkcJ'
),
(
    'happy',
    'spotify:user:spotifycharts:playlist:37i9dQZEVXbLRQDuF5jeBp'
),
(
    'new',
    'spotify:user:spotify:playlist:37i9dQZEVXcQdOuMseMT3g'
),
(
    'popular',
    'spotify:user:myplay.com:playlist:3C64V048fGyQfCjmu9TIGA'
);