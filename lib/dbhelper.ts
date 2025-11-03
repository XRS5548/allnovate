import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

// -------------------------
// Types
// -------------------------

export interface User {
  id: number;
  fullname: string;
  email: string;
  password: string;
  profiledb?: string | null;
  createdAt: string;
}

export interface Blog {
  id: number;
  title: string;
  photo?: string | null;
  content: string;
  excerpt?: string | null;
  tags?: string | null;
  createdBy?: number | null;
  createdAt: string;
  authorName?: string | null;
  authorPhoto?: string | null;
}

// -------------------------
// Database Helpers
// -------------------------

/**
 * ✅ Opens SQLite database connection
 */
export async function openDB(): Promise<Database<sqlite3.Database, sqlite3.Statement>> {
  return open({
    filename: "./main.db",
    driver: sqlite3.Database,
  });
}

/**
 * ✅ Initializes all required tables
 *    - users
 *    - blogs
 */
export async function initDB(): Promise<Database<sqlite3.Database, sqlite3.Statement>> {
  const db = await openDB();

  // --- USERS TABLE ---
  await db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      fullname TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      profiledb TEXT,
      createdAt TEXT DEFAULT (datetime('now'))
    )
  `);

  // --- BLOGS TABLE ---
  await db.run(`
    CREATE TABLE IF NOT EXISTS blogs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      photo TEXT,
      content TEXT NOT NULL,
      excerpt TEXT,
      tags TEXT,
      createdBy INTEGER,
      createdAt TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (createdBy) REFERENCES users(id)
    )
  `);

  console.log("✅ Database initialized with users and blogs tables.");

  return db;
}

/**
 * ✅ Creates a new user
 */
export async function createUser(
  fullname: string,
  email: string,
  password: string,
  profiledb: string | null = null
): Promise<number> {
  const db = await openDB();
  const result = await db.run(
    `INSERT INTO users (fullname, email, password, profiledb) VALUES (?, ?, ?, ?)`,
    [fullname, email, password, profiledb]
  );
  return result.lastID as number;
}

/**
 * ✅ Fetches user by email
 */
export async function getUserByEmail(email: string): Promise<User | undefined> {
  const db = await openDB();
  const user = await db.get<User>(`SELECT * FROM users WHERE email = ?`, [email]);
  return user;
}

/**
 * ✅ Adds a new blog (requires createdBy user ID)
 */
export async function createBlog({
  title,
  photo,
  content,
  excerpt,
  tags,
  createdBy,
}: {
  title: string;
  photo?: string;
  content: string;
  excerpt?: string;
  tags?: string;
  createdBy?: number | null;
}): Promise<number> {
  const db = await openDB();
  const result = await db.run(
    `INSERT INTO blogs (title, photo, content, excerpt, tags, createdBy)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [title, photo, content, excerpt, tags, createdBy]
  );
  return result.lastID as number;
}

/**
 * ✅ Fetches all blogs with author info
 */
export async function getAllBlogs(): Promise<Blog[]> {
  const db = await openDB();
  const blogs = await db.all<Blog[]>(`
    SELECT blogs.*, users.fullname as authorName, users.profiledb as authorPhoto
    FROM blogs
    LEFT JOIN users ON blogs.createdBy = users.id
    ORDER BY blogs.createdAt DESC
  `);
  return blogs;
}
