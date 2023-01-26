import { create } from 'zustand';
import { State, Action } from '../types/store.types';

const usePostStore = create<State & Action>((set, get) => ({
  posts: [],

  sortPosts: () => {
    const { posts } = get();
    const sortedPosts = posts.sort((a, b) => a.title.localeCompare(b.title));
    return set({ posts: sortedPosts });
  },
  fetchPosts: async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return set({ posts });
  },
}));

export default usePostStore;
