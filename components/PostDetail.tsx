'use client'

import { useQuery } from '@apollo/client'
import { GET_POST_BY_SLUG } from '@/lib/queries'
import Image from 'next/image'

interface PostDetailProps {
  slug: string
}

export default function PostDetail({ slug }: PostDetailProps) {
  const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
    variables: { slug },
  })

  if (loading) return <p className="text-center">Loading post...</p>
  if (error) return <p className="text-center text-red-500">Error loading post: {error.message}</p>

  const { post } = data

  return (
    <article className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <Image
        src={post.imageUrl || '/placeholder.svg?height=400&width=800'}
        alt={post.title}
        width={800}
        height={400}
        className="w-full h-64 object-cover"
      />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">By {post.author.username}</p>
        <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  )
}

