export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface State {
  posts: IPost[];
}

export interface Action {
  fetchPosts: () => Promise<void>;
}
