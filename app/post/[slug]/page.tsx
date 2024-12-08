import { Metadata } from "next";
import PostDetail from "@/components/PostDetail";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  // You would typically fetch the post data here to get the title
  return {
    title: `Post: ${params.slug}`,
  };
}

export default function PostPage({ params }: PostPageProps) {
  return <PostDetail slug={params.slug} />;
}
