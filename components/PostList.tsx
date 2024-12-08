/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useQuery } from '@apollo/client'
import { GET_ALL_POSTS } from '@/lib/queries'
import PostCard from './PostCard'

export default function PostList() {
  const { loading, error, data } = useQuery(GET_ALL_POSTS)

  if (loading) return <p className="text-center">Loading posts...</p>
  if (error) return <p className="text-center text-red-500">Error loading posts: {error.message}</p>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.allPosts.map((post: any) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

