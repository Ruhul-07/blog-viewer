// app/page.js

import Link from 'next/link';
import { fetchPosts } from '../lib/fetchPosts';

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Blog Viewer</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <Link href={`/blog/${post.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
