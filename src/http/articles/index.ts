import {
  CreateArticleInput,
  IArticle,
  ParseArticleInput,
  DeleteArticleInput,
  UpdateArticleInput,
} from '@/types/articles';
import $api from '..';
import { ENDPOINTS } from '@/utils/endpoints';

export class ArticlesController {
  static createArticle(input: CreateArticleInput) {
    return $api.post<IArticle>(ENDPOINTS.articles, input);
  }

  static updateArticle(input: UpdateArticleInput) {
    return $api.patch<IArticle>(ENDPOINTS.articles, input);
  }

  static deleteArticle(input: DeleteArticleInput) {
    return $api.delete(ENDPOINTS.articles, { data: input });
  }

  static parseArticles(input: ParseArticleInput) {
    return $api.post(ENDPOINTS.parse, input);
  }
}
