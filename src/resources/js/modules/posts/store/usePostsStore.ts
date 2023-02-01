import { create } from 'zustand';
import { State, Action } from '../types/store.types';
import axios from 'axios';

const usePostStore = create<State & Action>((set, get) => ({
  posts: [],

  sortPosts: () => {
    const { posts } = get();
    const sortedPosts = posts.sort((a, b) => a.title.localeCompare(b.title));
    return set({ posts: sortedPosts });
  },
  fetchPosts: async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = res.data;
    return set({ posts });
  },
}));

export default usePostStore;
