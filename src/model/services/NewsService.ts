import { Article } from "../entities/Article";

export default class NewsService {
  private apiKey = "fb841ad748a347a6af9891a8fc050650"; // <--- substitua aqui

  async searchNews(query: string): Promise<Article[]> {
    const encoded = encodeURIComponent(query);
    const url = `https://newsapi.org/v2/everything?q=${encoded}&language=pt&pageSize=30&sortBy=publishedAt&apiKey=${this.apiKey}`;
    const res = await fetch(url);
    if (!res.ok) {
      const t = await res.text();
      throw new Error(`NewsAPI error ${res.status}: ${t}`);
    }
    const json = await res.json();
    return (json.articles || []) as Article[];
  }
}
