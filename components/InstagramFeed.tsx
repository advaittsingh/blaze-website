'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface InstagramPost {
  id?: string
  caption?: string
  media_type?: string
  media_url?: string
  permalink?: string
  thumbnail_url?: string
  timestamp?: string
  url?: string
  html?: string
  title?: string
  likes?: number
  comments?: number
  shares?: number
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/instagram')
        const data = await response.json()
        
        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts)
        } else {
          // Fallback to mock posts with proper structure
          setPosts([
            {
              id: 'mock-1',
              url: 'https://www.instagram.com/p/example1/',
              permalink: 'https://www.instagram.com/p/example1/',
              media_url: '/fun-zone-image.png',
              caption: 'Which game do you like the most',
              likes: 14,
              comments: 0,
              shares: 0,
            },
            {
              id: 'mock-2',
              url: 'https://www.instagram.com/p/example2/',
              permalink: 'https://www.instagram.com/p/example2/',
              media_url: '/unleash-the-thrill.png',
              caption: "The real battle isn't with dinosaur. It's with your sibling",
              likes: 22,
              comments: 0,
              shares: 0,
            },
            {
              id: 'mock-3',
              url: 'https://www.instagram.com/p/example3/',
              permalink: 'https://www.instagram.com/p/example3/',
              media_url: '/fun-zone-image.png',
              caption: "Dehradun's first Trampoline Park...",
              likes: 1431,
              comments: 65,
              shares: 23,
            },
          ])
        }
      } catch (error) {
        console.error('Error fetching Instagram posts:', error)
        // Fallback to mock posts
        setPosts([
          {
            id: 'mock-1',
            url: 'https://www.instagram.com/p/example1/',
            permalink: 'https://www.instagram.com/p/example1/',
            media_url: '/fun-zone-image.png',
            caption: 'Which game do you like the most',
            likes: 14,
            comments: 0,
            shares: 0,
          },
          {
            id: 'mock-2',
            url: 'https://www.instagram.com/p/example2/',
            permalink: 'https://www.instagram.com/p/example2/',
            media_url: '/unleash-the-thrill.png',
            caption: "The real battle isn't with dinosaur. It's with your sibling",
            likes: 22,
            comments: 0,
            shares: 0,
          },
          {
            id: 'mock-3',
            url: 'https://www.instagram.com/p/example3/',
            permalink: 'https://www.instagram.com/p/example3/',
            media_url: '/fun-zone-image.png',
            caption: "Dehradun's first Trampoline Park...",
            likes: 1431,
            comments: 65,
            shares: 23,
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-black rounded-lg overflow-hidden animate-pulse">
            <div className="aspect-square bg-gray-700"></div>
            <div className="p-4 space-y-2">
              <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              <div className="h-3 bg-gray-700 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const mockPosts = [
    {
      caption: 'Which game do you like the most',
      likes: 14,
      comments: 0,
      shares: 0,
      engagement: 'Liked by gaurav_rawat0071 and 13 others',
      overlayText: 'Go-Karting',
    },
    {
      caption: "The real battle isn't with dinosaur. It's with your sibling",
      likes: 22,
      comments: 0,
      shares: 0,
      engagement: 'Followed by gaurav_rawat0071 and 9 others',
      overlayText: '',
    },
    {
      caption: "Dehradun's first Trampoline Park...",
      likes: 1431,
      comments: 65,
      shares: 23,
      engagement: 'Followed by kaustubh____',
      overlayText: '',
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
      {posts.slice(0, 3).map((post, index) => {
        const mockData = mockPosts[index] || mockPosts[0]
        return (
          <a
            key={post.id || index}
            href={post.permalink || post.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
          >
            {/* Image/Video Area */}
            <div className="aspect-square relative bg-black">
              {post.media_url || post.thumbnail_url ? (
                <Image
                  src={post.media_url || post.thumbnail_url || '/fun-zone-image.png'}
                  alt={post.caption || 'Instagram post'}
                  fill
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <div className="absolute inset-0">
                  <Image
                    src="/fun-zone-image.png"
                    alt={post.caption || 'Instagram post'}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              {/* Overlay text */}
              {mockData.overlayText && (
                <div className="absolute top-4 left-4">
                  <span className="text-white text-sm font-medium">{mockData.overlayText}</span>
                </div>
              )}
            </div>

            {/* Instagram-style UI */}
            <div className="p-4 bg-black">
              {/* Action Icons */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-4">
                  {/* Like */}
                  <button className="flex items-center gap-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  {/* Comment */}
                  <button className="flex items-center gap-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                  {/* Share */}
                  <button className="flex items-center gap-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
                {/* Save */}
                <button>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
              </div>

              {/* Likes count */}
              <div className="mb-2">
                <p className="text-white text-sm font-semibold">
                  {mockData.likes.toLocaleString()} {mockData.likes === 1 ? 'like' : 'likes'}
                </p>
              </div>

              {/* Caption */}
              <div className="mb-2">
                <p className="text-white text-sm">
                  <span className="font-semibold">blaaze_leadthethrill</span>{' '}
                  {post.caption || mockData.caption}
                </p>
              </div>

              {/* Engagement text */}
              <div className="mb-2">
                <p className="text-gray-400 text-sm">{mockData.engagement}</p>
              </div>

              {/* View comments link */}
              {mockData.comments > 0 && (
                <button className="text-gray-400 text-sm hover:text-white">
                  View all {mockData.comments} comments
                </button>
              )}
            </div>
          </a>
        )
      })}
    </div>
  )
}
