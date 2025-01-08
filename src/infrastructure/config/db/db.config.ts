import 'dotenv/config';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const DATABASE_URL = process.env.DATABASE_URL! as string;
const sql = neon(DATABASE_URL);
const db = drizzle({ client: sql });

export default db;
