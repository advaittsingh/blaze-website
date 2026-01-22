import { NextResponse } from 'next/server'

// Instagram Graph API endpoint
// To fetch real posts from @blaaze_leadthethrill, you need:
// 1. Instagram Business Account connected to a Facebook Page
// 2. Facebook App with Instagram Basic Display or Instagram Graph API
// 3. Access Token and User ID

export async function GET() {
  try {
    const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN
    const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID
    
    // Option 1: Using Instagram Graph API (requires access token)
    if (INSTAGRAM_ACCESS_TOKEN && INSTAGRAM_USER_ID) {
      try {
        const response = await fetch(
          `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=3`,
          { next: { revalidate: 3600 } } // Cache for 1 hour
        )
        
        if (response.ok) {
          const data = await response.json()
          if (data.data && data.data.length > 0) {
            return NextResponse.json({ posts: data.data })
          }
        } else {
          console.error('Instagram API error:', await response.text())
        }
      } catch (apiError) {
        console.error('Error calling Instagram API:', apiError)
      }
    }
    
    // Option 2: Fallback - Use oEmbed for specific post URLs
    // Add actual Instagram post/reel URLs from @blaaze_leadthethrill here
    const postUrls = [
      'https://www.instagram.com/reel/didxyvkjzim/',
      'https://www.instagram.com/reel/diqyndwplqt/',
      'https://www.instagram.com/reel/dii-u-tporv/',
    ]
    
    const posts = await Promise.all(
      postUrls.map(async (url) => {
        try {
          // Try Instagram oEmbed first
          const oembedResponse = await fetch(
            `https://graph.instagram.com/oembed?url=${encodeURIComponent(url)}`,
            { next: { revalidate: 3600 } }
          )
          
          if (oembedResponse.ok) {
            const oembed = await oembedResponse.json()
            return {
              url,
              permalink: url,
              thumbnail_url: oembed.thumbnail_url,
              caption: oembed.title || '',
              media_url: oembed.thumbnail_url,
            }
          }
          
          // Fallback to generic oEmbed
          const genericResponse = await fetch(
            `https://api.instagram.com/oembed/?url=${encodeURIComponent(url)}`,
            { next: { revalidate: 3600 } }
          )
          
          if (genericResponse.ok) {
            const oembed = await genericResponse.json()
            return {
              url,
              permalink: url,
              thumbnail_url: oembed.thumbnail_url,
              caption: oembed.title || '',
              media_url: oembed.thumbnail_url,
            }
          }
        } catch (error) {
          console.error(`Error fetching oEmbed for ${url}:`, error)
        }
        return null
      })
    )
    
    const validPosts = posts.filter(Boolean)
    
    if (validPosts.length > 0) {
      return NextResponse.json({ 
        posts: validPosts,
        message: INSTAGRAM_ACCESS_TOKEN 
          ? 'Using oEmbed fallback. Check API credentials.' 
          : 'Using oEmbed. Set INSTAGRAM_ACCESS_TOKEN for full API access.'
      })
    }
    
    // Return empty array if all methods fail
    return NextResponse.json({ 
      posts: [],
      message: 'No posts found. Please configure Instagram API credentials or add post URLs.'
    })
    
  } catch (error) {
    console.error('Error fetching Instagram posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch Instagram posts', posts: [] },
      { status: 500 }
    )
  }
}
