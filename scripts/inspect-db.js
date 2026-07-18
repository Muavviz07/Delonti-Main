const { Pool } = require('pg');

const DATABASE_URL = process.env.DATABASE_URL || "postgresql://neondb_owner:npg_GHi9Dv1ypSFW@ep-autumn-glade-audkdavf-pooler.c-10.us-east-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require";

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function main() {
  const client = await pool.connect();
  try {
    const res = await client.query(`
      SELECT table_name, column_name, data_type, is_nullable
      FROM information_schema.columns
      WHERE table_schema = 'public'
      ORDER BY table_name, ordinal_position;
    `);
    
    const schema = {};
    res.rows.forEach(r => {
      if (!schema[r.table_name]) schema[r.table_name] = [];
      schema[r.table_name].push(`${r.column_name} (${r.data_type}, nullable: ${r.is_nullable})`);
    });

    console.log('--- DATABASE SCHEMA IN NEON DB ---');
    console.log(JSON.stringify(schema, null, 2));
  } catch (err) {
    console.error('Inspect failed:', err);
  } finally {
    client.release();
    await pool.end();
  }
}

main();
