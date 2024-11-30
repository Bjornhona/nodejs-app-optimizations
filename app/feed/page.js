import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';

// It has to be called 'metadata'.
// export const metadata = {
//   title: 'Browse all our X posts',
//   description: 'Browse all our posts'
// };

// If I want my metadata to be dynamic. It has to be called 'generateMetadata'.
export const generateMetadata = async (data) => {
  // const {params, searchParams} = data;
  const posts = await getPosts();
  const numberOfPosts = posts.length;
  return {
    title: `Browse all ${numberOfPosts} posts`,
    description: 'Browse all our posts'
  };
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
