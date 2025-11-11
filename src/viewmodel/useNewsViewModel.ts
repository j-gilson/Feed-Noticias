import { useState, useCallback, useEffect} from "react";
import NewsService from "../model/services/NewsService";
import { Article } from "../model/entities/Article";

export function useNewsViewModel() {
  const service = new NewsService();

  const [query, setQuery] = useState<string>("Atualidade");
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const search = useCallback(async (q?: string) => {
    const qfinal = q ?? query;
    try {
      setLoading(true);
      setError("");
      const results = await service.searchNews(qfinal);
      setArticles(results);
    } catch (e: any) {
      setError(e.message || "Erro ao buscar notícias");
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    search();
  }, []);


  return {
    query,
    setQuery,
    articles,
    loading,
    error,
    search,
  };
}
