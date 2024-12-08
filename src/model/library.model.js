import pool from "../config/db.connect.js";

const LibraryModel = {
    getRecentTracks: async (user_id, callback) => {
        try {
            const query = `
            SELECT 
                t.id AS id,
                t.title AS title,
                MAX(put.played_at) AS latest_played_at
            FROM 
                plays_user_track AS put
            JOIN 
                tracks AS t ON put.track_id = t.id
            WHERE 
                put.user_id = $1
            GROUP BY 
                t.id, t.title
            ORDER BY 
                latest_played_at DESC
            LIMIT 10;
            `;

            const result = await pool.query(query, [user_id]);
            return callback(null, result.rows);
        } catch (error) {
            return callback(error);
        }
    },

    getRecentAlbums: async (user_id, callback) => {
        try {
            const query = `
            SELECT 
                a.id AS id, 
                a.title AS title, 
                a.cover AS cover
            FROM 
                plays_user_track AS put
            JOIN 
                track_album AS ta ON put.track_id = ta.track_id
            JOIN 
                albums AS a ON ta.album_id = a.id
            WHERE 
                put.user_id = $1
            GROUP BY
                a.id, a.title, a.cover  
            ORDER BY 
                MAX(put.played_at) DESC  
            LIMIT 10;

            `;

            const result = await pool.query(query, [user_id]);
            return callback(null, result.rows);
        } catch (error) {
            return callback(error);
        }
    },

    getRecentArtists: async (user_id, callback) => {
        try {
            const query = `
            SELECT
                us.id AS artist_id,
                us.display_name AS artist_name,
                MAX(put.played_at) AS last_played_at  
            FROM 
                plays_user_track AS put
            JOIN 
                tracks AS t ON put.track_id = t.id
            JOIN 
                user_track AS ut ON t.id = ut.track_id
            JOIN 
                users AS us ON ut.user_id = us.id
            WHERE 
                put.user_id = $1
            GROUP BY
                us.id, us.display_name  
            ORDER BY 
                last_played_at DESC  
            LIMIT 10;

            `;

            const result = await pool.query(query, [user_id]);
            return callback(null, result.rows);
        } catch (error) {
            return callback(error);
        }
    },
};

export default LibraryModel;