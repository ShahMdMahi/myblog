import Image from 'next/image'
import Link from 'next/link'

interface PostCardProps {
  post: {
    id: string
    title: string
    slug: string
    imageUrl: string
    excerpt: string
    author: {
      name: string
    }
  }
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Image
        src={post.imageUrl || '/placeholder.svg?height=200&width=400'}
        alt={post.title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">By {post.author.name}</span>
          <Link href={`/post/${post.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline">
            Read more
          </Link>
        </div>
      </div>
    </div>
  )
}

