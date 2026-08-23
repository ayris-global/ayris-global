-- EWI Commercial Discovery Engine -- D1 Database Schema
-- Session 1: Foundation tables only. No data yet.

CREATE TABLE buyers (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  market TEXT NOT NULL,
  category TEXT,
  score INTEGER,
  status TEXT DEFAULT 'not_contacted',
  contact_email TEXT,
  contact_phone TEXT,
  notes TEXT,
  source TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE suppliers (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT,
  certifications TEXT,
  capacity TEXT,
  readiness_score INTEGER,
  status TEXT DEFAULT 'new',
  contact_email TEXT,
  contact_phone TEXT,
  notes TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE opportunities (
  id TEXT PRIMARY KEY,
  buyer_id TEXT REFERENCES buyers(id),
  supplier_id TEXT REFERENCES suppliers(id),
  market TEXT,
  category TEXT,
  value_estimate REAL,
  probability INTEGER,
  opportunity_score INTEGER,
  status TEXT DEFAULT 'open',
  next_action TEXT,
  notes TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE outcomes (
  id TEXT PRIMARY KEY,
  opportunity_id TEXT REFERENCES opportunities(id),
  outcome_type TEXT,
  description TEXT,
  lessons_learned TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);