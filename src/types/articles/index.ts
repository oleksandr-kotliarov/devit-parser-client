export interface IArticle {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  creator: string;
  content: string;
  guid: string;
  _id: string;
}

export interface ArticlesResponse {
  list: IArticle[];
  total: number;
  page: number;
  limit: number;
}

export interface ArticlesQueryParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: 1 | -1;
  search?: string;
}

export type CreateArticleInput = Omit<IArticle, '_id'>;
export type UpdateArticleInput = Partial<CreateArticleInput> & { _id: string };
export type DeleteArticleInput = { _id: string };
export type ParseArticleInput = { href: string };
