// app/blog/[id]/page.js

import { fetchPostById } from '../../../lib/fetchPostById';

export default async function BlogDetails({ params }) {
  const { id } = params;
  const post = await fetchPostById(id);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
