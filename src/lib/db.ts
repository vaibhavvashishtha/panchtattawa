import Database from 'better-sqlite3'
import path from 'path'
import fs from 'fs'

const DB_DIR = path.join(process.cwd(), 'data')
const DB_PATH = path.join(DB_DIR, 'panchtattawa.db')

if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true })
}

const db = new Database(DB_PATH)

db.pragma('journal_mode = WAL')

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`)

db.exec(`
  CREATE TABLE IF NOT EXISTS payments (
    id TEXT PRIMARY KEY,
    razorpay_order_id TEXT UNIQUE NOT NULL,
    razorpay_payment_id TEXT,
    razorpay_signature TEXT,
    amount INTEGER NOT NULL,
    currency TEXT NOT NULL DEFAULT 'INR',
    item_type TEXT NOT NULL,
    item_id TEXT NOT NULL,
    item_label TEXT NOT NULL,
    donor_name TEXT,
    donor_email TEXT,
    donor_phone TEXT,
    status TEXT NOT NULL DEFAULT 'created',
    notes TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`)
db.exec(`CREATE INDEX IF NOT EXISTS idx_payments_order_id ON payments(razorpay_order_id)`)
db.exec(`CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status)`)

export default db
