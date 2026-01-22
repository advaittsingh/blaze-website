import { NextResponse } from 'next/server'

// Force Node.js runtime to avoid __dirname errors
export const runtime = 'nodejs'

// Mock Instagram posts - using mock data to avoid build errors
export async function GET() {
  // Return mock posts immediately without making external API calls
  const mockPosts = [
    {
      id: 'mock-1',
      url: 'https://www.instagram.com/p/example1/',
      permalink: 'https://www.instagram.com/p/example1/',
      media_url: '/fun-zone-image.png',
      thumbnail_url: '/fun-zone-image.png',
      caption: 'Which game do you like the most',
      media_type: 'IMAGE',
      timestamp: new Date().toISOString(),
      likes: 14,
      comments: 0,
      shares: 0,
    },
    {
      id: 'mock-2',
      url: 'https://www.instagram.com/p/example2/',
      permalink: 'https://www.instagram.com/p/example2/',
      media_url: '/unleash-the-thrill.png',
      thumbnail_url: '/unleash-the-thrill.png',
      caption: "The real battle isn't with dinosaur. It's with your sibling",
      media_type: 'IMAGE',
      timestamp: new Date().toISOString(),
      likes: 22,
      comments: 0,
      shares: 0,
    },
    {
      id: 'mock-3',
      url: 'https://www.instagram.com/p/example3/',
      permalink: 'https://www.instagram.com/p/example3/',
      media_url: '/fun-zone-image.png',
      thumbnail_url: '/fun-zone-image.png',
      caption: "Dehradun's first Trampoline Park...",
      media_type: 'IMAGE',
      timestamp: new Date().toISOString(),
      likes: 1431,
      comments: 65,
      shares: 23,
    },
  ]

  return NextResponse.json({ 
    posts: mockPosts,
    message: 'Using mock Instagram posts'
  })
}
