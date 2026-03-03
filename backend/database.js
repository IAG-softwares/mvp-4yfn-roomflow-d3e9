import Database from 'better-sqlite3'
import { v4 as uuidv4 } from 'uuid'

let db = null

export const initDatabase = () => {
  db = new Database('app.db')
  db.pragma('journal_mode = WAL')


  db.exec(`
    CREATE TABLE IF NOT EXISTS building (
      id TEXT NOT NULL PRIMARY KEY,
      buildingName TEXT NOT NULL,
      address TEXT NOT NULL,
      capacity INTEGER NOT NULL,
      amenities TEXT,
      contactEmail TEXT NOT NULL,
      operatingHours TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `)

  db.exec(`
    CREATE TABLE IF NOT EXISTS booking (
      id TEXT NOT NULL PRIMARY KEY,
      buildingId TEXT NOT NULL,
      bookingTitle TEXT NOT NULL,
      bookerName TEXT NOT NULL,
      bookerEmail TEXT NOT NULL,
      startDate TEXT NOT NULL,
      startTime TEXT NOT NULL,
      endDate TEXT NOT NULL,
      endTime TEXT NOT NULL,
      attendees INTEGER NOT NULL,
      status TEXT NOT NULL,
      specialRequirements TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `)

  console.log('Database initialized')
}

export const getDb = () => {
  if (!db) {
    throw new Error('Database not initialized')
  }
  return db
}

export const generateId = () => uuidv4()
