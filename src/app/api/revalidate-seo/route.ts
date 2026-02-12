import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag, revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { path, secret } = body

    // Verify the secret
    const expectedSecret = process.env.REVALIDATION_SECRET || 'seo-revalidation-secret-key-2024'
    if (secret !== expectedSecret) {
      return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
    }

    if (!path) {
      return NextResponse.json({ error: 'Path is required' }, { status: 400 })
    }

    // Revalidating SEO for path

    // Revalidate the specific path
    revalidatePath(path)

    return NextResponse.json({ 
      message: 'Revalidation successful', 
      path,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json(
      { error: 'Revalidation failed' },
      { status: 500 }
    )
  }
}

// Handle preflight requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}