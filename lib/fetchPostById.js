// lib/fetchPostById.js

export async function fetchPostById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  return res.json();
}
