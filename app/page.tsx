import PostList from '@/components/PostList'

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Beautiful Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">Discover amazing stories and insights on various topics.</p>
      </section>
      <PostList />
    </div>
  )
}

