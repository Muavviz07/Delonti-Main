const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');

const DATABASE_URL = process.env.DATABASE_URL || "postgresql://neondb_owner:npg_GHi9Dv1ypSFW@ep-autumn-glade-audkdavf-pooler.c-10.us-east-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require";

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

function slugify(text) {
  return text.toString().toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
}

async function main() {
  console.log('--- Starting Migration ---');
  const client = await pool.connect();

  try {
    // 1. Migrate Jobs
    const jobsPath = path.join(__dirname, '..', 'data', 'jobs.json');
    if (fs.existsSync(jobsPath)) {
      const jobs = JSON.parse(fs.readFileSync(jobsPath, 'utf8'));
      console.log(`Migrating ${jobs.length} jobs...`);
      for (const job of jobs) {
        const now = new Date().toISOString();
        await client.query(`
          INSERT INTO jobs (id, slug, title, category, job_type, location, posted_at, job_code, qualification, experience, required_skills, roles_responsibilities, is_active, created_at, updated_at)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
          ON CONFLICT (id) DO UPDATE SET
            slug = EXCLUDED.slug,
            title = EXCLUDED.title,
            category = EXCLUDED.category,
            job_type = EXCLUDED.job_type,
            location = EXCLUDED.location,
            posted_at = EXCLUDED.posted_at,
            job_code = EXCLUDED.job_code,
            qualification = EXCLUDED.qualification,
            experience = EXCLUDED.experience,
            required_skills = EXCLUDED.required_skills,
            roles_responsibilities = EXCLUDED.roles_responsibilities,
            is_active = EXCLUDED.is_active,
            updated_at = EXCLUDED.updated_at
        `, [
          job.id,
          job.slug || slugify(job.title),
          job.title,
          job.category,
          job.jobType,
          job.location,
          job.postedAt || now,
          job.jobCode || null,
          job.qualification || null,
          job.experience || null,
          job.requiredSkills || [],
          job.rolesAndResponsibilities || [],
          job.isActive !== undefined ? job.isActive : true,
          job.createdAt || now,
          now
        ]);
      }
    }

    // 2. Migrate Blogs
    const blogsPath = path.join(__dirname, '..', 'data', 'blogs.json');
    const blogCategories = new Set();
    if (fs.existsSync(blogsPath)) {
      const blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf8'));
      console.log(`Migrating ${blogs.length} blogs...`);
      for (const blog of blogs) {
        const now = new Date().toISOString();
        if (blog.category) blogCategories.add(blog.category);
        await client.query(`
          INSERT INTO blogs (id, slug, title, category, date, description, image, content, is_published, created_at, updated_at)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
          ON CONFLICT (id) DO UPDATE SET
            slug = EXCLUDED.slug,
            title = EXCLUDED.title,
            category = EXCLUDED.category,
            date = EXCLUDED.date,
            description = EXCLUDED.description,
            image = EXCLUDED.image,
            content = EXCLUDED.content,
            is_published = EXCLUDED.is_published,
            updated_at = EXCLUDED.updated_at
        `, [
          blog.id,
          blog.slug || slugify(blog.title),
          blog.title,
          blog.category,
          blog.date || now,
          blog.description,
          blog.image || '',
          blog.content || [],
          blog.isPublished !== undefined ? blog.isPublished : true,
          blog.createdAt || now,
          now
        ]);
      }
    }

    // 3. Migrate Articles
    const articlesPath = path.join(__dirname, '..', 'data', 'articles.json');
    const articleCategories = new Set();
    if (fs.existsSync(articlesPath)) {
      const articles = JSON.parse(fs.readFileSync(articlesPath, 'utf8'));
      console.log(`Migrating ${articles.length} articles...`);
      for (const article of articles) {
        const now = new Date().toISOString();
        if (article.category) articleCategories.add(article.category);
        await client.query(`
          INSERT INTO articles (id, slug, title, category, date, description, image, content, is_published, created_at, updated_at)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
          ON CONFLICT (id) DO UPDATE SET
            slug = EXCLUDED.slug,
            title = EXCLUDED.title,
            category = EXCLUDED.category,
            date = EXCLUDED.date,
            description = EXCLUDED.description,
            image = EXCLUDED.image,
            content = EXCLUDED.content,
            is_published = EXCLUDED.is_published,
            updated_at = EXCLUDED.updated_at
        `, [
          article.id,
          article.slug || slugify(article.title),
          article.title,
          article.category,
          article.date || now,
          article.description,
          article.image || '',
          article.content || [],
          article.isPublished !== undefined ? article.isPublished : true,
          article.createdAt || now,
          now
        ]);
      }
    }

    // 4. Migrate Job Categories, Job Types, Job Locations
    const catPath = path.join(__dirname, '..', 'data', 'categories.json');
    if (fs.existsSync(catPath)) {
      const catData = JSON.parse(fs.readFileSync(catPath, 'utf8'));
      if (catData.categories) {
        for (const c of catData.categories) {
          const id = slugify(c);
          await client.query(`
            INSERT INTO job_categories (id, name) VALUES ($1, $2)
            ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name
          `, [id, c]);
        }
      }
      if (catData.jobTypes) {
        for (const jt of catData.jobTypes) {
          const id = slugify(jt);
          await client.query(`
            INSERT INTO job_types (id, name) VALUES ($1, $2)
            ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name
          `, [id, jt]);
        }
      }
      if (catData.locations) {
        for (const loc of catData.locations) {
          const id = slugify(loc);
          await client.query(`
            INSERT INTO job_locations (id, name) VALUES ($1, $2)
            ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name
          `, [id, loc]);
        }
      }
    }

    // 5. Migrate Blog & Article Categories
    for (const bc of blogCategories) {
      const id = slugify(bc);
      await client.query(`
        INSERT INTO blog_categories (id, name) VALUES ($1, $2)
        ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name
      `, [id, bc]);
    }
    for (const ac of articleCategories) {
      const id = slugify(ac);
      await client.query(`
        INSERT INTO article_categories (id, name) VALUES ($1, $2)
        ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name
      `, [id, ac]);
    }

    // 6. Migrate Admin Users
    const adminPath = path.join(__dirname, '..', 'data', 'admin-config.json');
    const now = new Date().toISOString();
    
    // Always insert default admin user
    await client.query(`
      INSERT INTO admin_users (id, username, password, role, created_at, updated_at)
      VALUES ($1, $2, $3, $4, $5, $6)
      ON CONFLICT (id) DO UPDATE SET username = EXCLUDED.username, password = EXCLUDED.password, role = EXCLUDED.role, updated_at = EXCLUDED.updated_at
    `, ['admin-1', 'admin', 'admin', 'super-admin', now, now]);

    if (fs.existsSync(adminPath)) {
      const adminData = JSON.parse(fs.readFileSync(adminPath, 'utf8'));
      if (adminData.users) {
        let index = 2;
        for (const [username, userData] of Object.entries(adminData.users)) {
          const id = username === 'admin' ? 'admin-1' : `admin-${index++}`;
          await client.query(`
            INSERT INTO admin_users (id, username, password, role, created_at, updated_at)
            VALUES ($1, $2, $3, $4, $5, $6)
            ON CONFLICT (id) DO UPDATE SET username = EXCLUDED.username, password = EXCLUDED.password, role = EXCLUDED.role, updated_at = EXCLUDED.updated_at
          `, [id, username, userData.password, userData.role || 'admin', now, now]);
        }
      }
    }

    // 7. Verify Counts
    console.log('\n--- Migration Verification ---');
    const jobsCount = await client.query('SELECT COUNT(*) FROM jobs');
    const blogsCount = await client.query('SELECT COUNT(*) FROM blogs');
    const articlesCount = await client.query('SELECT COUNT(*) FROM articles');
    const adminCount = await client.query('SELECT COUNT(*) FROM admin_users');
    const jobCatCount = await client.query('SELECT COUNT(*) FROM job_categories');
    const jobTypesCount = await client.query('SELECT COUNT(*) FROM job_types');
    const jobLocsCount = await client.query('SELECT COUNT(*) FROM job_locations');

    console.log(`jobs count: ${jobsCount.rows[0].count}`);
    console.log(`blogs count: ${blogsCount.rows[0].count}`);
    console.log(`articles count: ${articlesCount.rows[0].count}`);
    console.log(`admin_users count: ${adminCount.rows[0].count}`);
    console.log(`job_categories count: ${jobCatCount.rows[0].count}`);
    console.log(`job_types count: ${jobTypesCount.rows[0].count}`);
    console.log(`job_locations count: ${jobLocsCount.rows[0].count}`);

    console.log('--- Migration Completed Successfully! ---');
  } catch (err) {
    console.error('Migration failed:', err);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

main();
