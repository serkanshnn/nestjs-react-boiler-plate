import React from 'react';
import { shallow } from 'zustand/shallow';
import usePostsStore from '../store/usePostsStore';

export default function Posts(props) {
  const [posts, fetchPosts] = usePostsStore(
    (state) => [state.posts, state.fetchPosts],
    shallow,
  );

  React.useEffect(() => {
    fetchPosts();
  }, []);

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
