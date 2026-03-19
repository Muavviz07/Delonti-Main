import { NextRequest, NextResponse } from 'next/server'
import { readBlogs, writeBlogs } from '@/lib/jobs'

interface RouteParams {
    params: Promise<{ id: string }>
}

export async function GET(
    _request: NextRequest,
    { params }: RouteParams
) {
    try {
        const { id } = await params
        const blogs = readBlogs()
        const blog = blogs.find(b => b.id === id)
        if (!blog) {
            return NextResponse.json({ error: 'Not found' }, { status: 404 })
        }
        return NextResponse.json(blog)
    } catch (error) {
        console.error('GET /api/blogs/[id] error:', error)
        return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 })
    }
}

export async function PUT(
    request: NextRequest,
    { params }: RouteParams
) {
    try {
        const { id } = await params
        const body = await request.json()
        const blogs = readBlogs()
        const index = blogs.findIndex(b => b.id === id)

        if (index === -1) {
            return NextResponse.json({ error: 'Not found' }, { status: 404 })
        }

        // Regenerate slug if title changed
        let slug = blogs[index].slug
        if (body.title && body.title !== blogs[index].title) {
            slug = body.title
                .toLowerCase()
                .trim()
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-')
        }

        blogs[index] = {
            ...blogs[index],
            ...body,
            id,
            slug,
            isPublished: body.isPublished === true || body.isPublished === 'true',
        }

        writeBlogs(blogs)
        return NextResponse.json(blogs[index])
    } catch (error) {
        console.error('PUT /api/blogs/[id] error:', error)
        return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 })
    }
}

export async function DELETE(
    _request: NextRequest,
    { params }: RouteParams
) {
    try {
        const { id } = await params
        const blogs = readBlogs()
        const index = blogs.findIndex(b => b.id === id)

        if (index === -1) {
            return NextResponse.json({ error: 'Not found' }, { status: 404 })
        }

        blogs.splice(index, 1)
        writeBlogs(blogs)
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('DELETE /api/blogs/[id] error:', error)
        return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 })
    }
}
