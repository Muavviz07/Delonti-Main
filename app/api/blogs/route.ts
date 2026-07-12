import { NextResponse } from 'next/server'
import { readBlogs, writeBlogs, generateContentSlug, BlogPost } from '@/lib/jobs'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const published = searchParams.get('published')
    const category = searchParams.get('category')

    let blogs = readBlogs()

    if (published === 'true') {
        blogs = blogs.filter(b => b.isPublished)
    }

    if (category) {
        blogs = blogs.filter(b => b.category === category)
    }

    blogs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

    return NextResponse.json(blogs)
}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { title, category, date, description, image, content, isPublished } = body

        if (!title || !category || !content) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        const blogs = readBlogs()

        const newBlog: BlogPost = {
            id: `blog-${Date.now()}`,
            slug: generateContentSlug(title),
            title,
            category,
            date,
            description: description || '',
            image: image || '',
            content: Array.isArray(content) ? content : [],
            isPublished: isPublished ?? false,
            createdAt: new Date().toISOString()
        }

        blogs.push(newBlog)
        writeBlogs(blogs)

        return NextResponse.json(newBlog, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
