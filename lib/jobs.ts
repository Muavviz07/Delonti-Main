import { query } from './db';

export interface Job {
  id: string;
  slug?: string;
  title: string;
  category: string;
  jobType: string;
  location: string;
  postedAt: string;
  jobCode: string;
  qualification: string;
  experience: string;
  requiredSkills: string[];
  rolesAndResponsibilities: string[];
  isActive: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
  content: string[];
  isPublished: boolean;
  createdAt: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
  content: string[];
  isPublished: boolean;
  createdAt: string;
}

export interface CategoriesData {
  categories: string[];
  jobTypes: string[];
  locations: string[];
}

export async function readJobs(): Promise<Job[]> {
  try {
    const result = await query('SELECT * FROM jobs ORDER BY posted_at DESC');
    return result.rows.map(row => ({
      id: row.id,
      slug: row.slug,
      title: row.title,
      category: row.category,
      jobType: row.job_type,
      location: row.location,
      postedAt: row.posted_at,
      jobCode: row.job_code,
      qualification: row.qualification,
      experience: row.experience,
      requiredSkills: row.required_skills || [],
      rolesAndResponsibilities: row.roles_responsibilities || [],
      isActive: row.is_active,
    }));
  } catch (error) {
    console.error('Error reading jobs:', error);
    return [];
  }
}

export async function readBlogs(): Promise<BlogPost[]> {
  try {
    const result = await query('SELECT * FROM blogs ORDER BY created_at DESC');
    return result.rows.map(row => ({
      id: row.id,
      slug: row.slug,
      title: row.title,
      category: row.category,
      date: row.date,
      description: row.description,
      image: row.image || '',
      content: row.content || [],
      isPublished: row.is_published,
      createdAt: row.created_at,
    }));
  } catch (error) {
    console.error('Error reading blogs:', error);
    return [];
  }
}

export async function readArticles(): Promise<Article[]> {
  try {
    const result = await query('SELECT * FROM articles ORDER BY created_at DESC');
    return result.rows.map(row => ({
      id: row.id,
      slug: row.slug,
      title: row.title,
      category: row.category,
      date: row.date,
      description: row.description,
      image: row.image || '',
      content: row.content || [],
      isPublished: row.is_published,
      createdAt: row.created_at,
    }));
  } catch (error) {
    console.error('Error reading articles:', error);
    return [];
  }
}

export async function readCategories(): Promise<CategoriesData> {
  try {
    const [catsResult, typesResult, locsResult] = await Promise.all([
      query('SELECT name FROM job_categories ORDER BY name'),
      query('SELECT name FROM job_types ORDER BY name'),
      query('SELECT name FROM job_locations ORDER BY name'),
    ]);

    return {
      categories: catsResult.rows.map(r => r.name),
      jobTypes: typesResult.rows.map(r => r.name),
      locations: locsResult.rows.map(r => r.name),
    };
  } catch (error) {
    console.error('Error reading categories:', error);
    return { categories: [], jobTypes: [], locations: [] };
  }
}

export interface AdminConfig {
  users: { [key: string]: { password: string; role: string } };
}

export async function readAdminConfig(): Promise<AdminConfig> {
  try {
    const result = await query('SELECT username, password, role FROM admin_users');
    const users: { [key: string]: { password: string; role: string } } = {};
    result.rows.forEach(row => {
      users[row.username] = {
        password: row.password,
        role: row.role,
      };
    });
    return { users };
  } catch (error) {
    console.error('Error reading admin config:', error);
    return { users: {} };
  }
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export function generateContentSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}
