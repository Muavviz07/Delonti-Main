import { NextResponse } from 'next/server'
import { readArticles, writeArticles, generateContentSlug, Article } from '@/lib/jobs'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const published = searchParams.get('published')
    const category = searchParams.get('category')

    let articles = readArticles()

    if (published === 'true') {
        articles = articles.filter(a => a.isPublished)
    }

    if (category) {
        articles = articles.filter(a => a.category === category)
    }

    articles.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

    return NextResponse.json(articles)
}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { title, category, date, description, image, content, isPublished } = body

        if (!title || !category || !content) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        const articles = readArticles()

        const newArticle: Article = {
            id: `article-${Date.now()}`,
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

        articles.push(newArticle)
        writeArticles(articles)

        return NextResponse.json(newArticle, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
