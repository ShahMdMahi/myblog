import { Metadata } from "next";
import PostDetail from "@/components/PostDetail";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const slug = (await params).slug;
  // You would typically fetch the post data here to get the title
  return {
    title: `Post: ${slug}`,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const slug = (await params).slug;
  return <PostDetail slug={slug} />;
}
