import React from 'react';
import { shallow } from 'zustand/shallow';
import usePostsStore from '../store/usePostsStore';

export default function Posts() {
  const [posts, fetchPosts] = usePostsStore(
    (state) => [state.posts, state.fetchPosts],
    shallow,
  );

  React.useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="max-w-xl p-3 mx-auto">
      <h1 className="mb-4 text-5xl text-center">Posts</h1>
      <div className="flex flex-col gap-2">
        {posts.length > 0 &&
          posts.map((post) => (
            <div key={post.id} className="p-4 rounded shadow-md bg-slate-100">
              <h2 className="text-xl font-bold text-center uppercase">
                {post.title.slice(0, 18)}
              </h2>
              <p className="text-justify text-gray-800">{post.body}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
