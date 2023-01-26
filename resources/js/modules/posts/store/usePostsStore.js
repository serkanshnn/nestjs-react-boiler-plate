import { create } from 'zustand';

export const usePostsStore = create((set, get) => ({
  posts: [],

  setPosts: (posts) => set({ posts }),
}));
