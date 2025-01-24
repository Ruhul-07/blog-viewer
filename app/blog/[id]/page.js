// app/blog/[id]/page.js

import { fetchPostById } from "../../../lib/fetchPostById";

export default async function BlogDetails({ params }) {
  const { id } = params;
  const post = await fetchPostById(id);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-lg text-gray-700 leading-relaxed">{post.body}</p>
    </div>
  );
}
