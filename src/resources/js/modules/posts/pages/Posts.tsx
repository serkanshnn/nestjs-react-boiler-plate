import React, { useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import { usePostsStore } from '../store/usePostsStore';

export default function Posts({ data }) {
  const [posts, setPosts] = usePostsStore(
    (state) => [state.posts, state.setPosts],
    shallow,
  );

  useEffect(() => {
    if (data) setPosts(data);
  }, [data]);

  return (
    <div className="max-w-md mx-auto">
      <h1 className="mb-2 text-5xl text-center">Posts</h1>
      {posts.length > 0 &&
        posts.map((post) => (
          <div key={post.id}>
            <h2 className="font-bold">{post.title}</h2>
            <p className="text-gray-800">{post.body}</p>
          </div>
        ))}
    </div>
  );
}
