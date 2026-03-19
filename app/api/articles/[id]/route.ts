import { NextRequest, NextResponse } from 'next/server'
import { readArticles, writeArticles } from '@/lib/jobs'

interface RouteParams {
    params: Promise<{ id: string }>
}

export async function GET(
    _request: NextRequest,
    { params }: RouteParams
) {
    try {
        const { id } = await params
        const articles = readArticles()
        const article = articles.find(a => a.id === id)
        if (!article) {
            return NextResponse.json({ error: 'Not found' }, { status: 404 })
        }
        return NextResponse.json(article)
    } catch (error) {
        console.error('GET /api/articles/[id] error:', error)
        return NextResponse.json({ error: 'Failed to fetch article' }, { status: 500 })
    }
}

export async function PUT(
    request: NextRequest,
    { params }: RouteParams
) {
    try {
        const { id } = await params
        const body = await request.json()
        const articles = readArticles()
        const index = articles.findIndex(a => a.id === id)

        if (index === -1) {
            return NextResponse.json({ error: 'Not found' }, { status: 404 })
        }

        // Regenerate slug if title changed
        let slug = articles[index].slug
        if (body.title && body.title !== articles[index].title) {
            slug = body.title
                .toLowerCase()
                .trim()
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-')
        }

        articles[index] = {
            ...articles[index],
            ...body,
            id,
            slug,
            isPublished: body.isPublished === true || body.isPublished === 'true',
        }

        writeArticles(articles)
        return NextResponse.json(articles[index])
    } catch (error) {
        console.error('PUT /api/articles/[id] error:', error)
        return NextResponse.json({ error: 'Failed to update article' }, { status: 500 })
    }
}

export async function DELETE(
    _request: NextRequest,
    { params }: RouteParams
) {
    try {
        const { id } = await params
        const articles = readArticles()
        const index = articles.findIndex(a => a.id === id)

        if (index === -1) {
            return NextResponse.json({ error: 'Not found' }, { status: 404 })
        }

        articles.splice(index, 1)
        writeArticles(articles)
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('DELETE /api/articles/[id] error:', error)
        return NextResponse.json({ error: 'Failed to delete article' }, { status: 500 })
    }
}
