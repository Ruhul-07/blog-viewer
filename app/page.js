// app/page.js

import Link from 'next/link';
import { fetchPosts } from '../lib/fetchPosts';

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <div>
      <h1>Blog Viewer</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
