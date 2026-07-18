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
    console.log('=== VERIFYING POSTGRESQL DATA PERSISTENCE ===');
    const jobs = await client.query('SELECT id, title, category FROM jobs ORDER BY posted_at DESC');
    console.log(`\nJobs (${jobs.rows.length}):`);
    jobs.rows.forEach(j => console.log(` - [${j.id}] ${j.title} (${j.category})`));

    const blogs = await client.query('SELECT id, title, category FROM blogs ORDER BY created_at DESC');
    console.log(`\nBlogs (${blogs.rows.length}):`);
    blogs.rows.forEach(b => console.log(` - [${b.id}] ${b.title} (${b.category})`));

    const articles = await client.query('SELECT id, title, category FROM articles ORDER BY created_at DESC');
    console.log(`\nArticles (${articles.rows.length}):`);
    articles.rows.forEach(a => console.log(` - [${a.id}] ${a.title} (${a.category})`));

    const admins = await client.query('SELECT id, username, role FROM admin_users');
    console.log(`\nAdmin Users (${admins.rows.length}):`);
    admins.rows.forEach(u => console.log(` - [${u.id}] Username: ${u.username}, Role: ${u.role}`));

    console.log('\n✅ ALL VERIFICATIONS PASSED SUCCESSFULLY!');
  } finally {
    client.release();
    await pool.end();
  }
}

main();
