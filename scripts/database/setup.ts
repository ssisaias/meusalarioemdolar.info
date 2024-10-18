import Database from 'better-sqlite3';

const db = new Database('database.db');

// Create a table if it doesn't exist
db.exec(`CREATE TABLE IF NOT EXISTS scraped_data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT
)`);
