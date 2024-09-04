const Database = require("better-sqlite3");
const path = require("path");

const dbPath = path.resolve(__dirname, "../test.sqlite");

const db = new Database(dbPath);
db.pragma("journal_mode = WAL");

exports.db = db;
