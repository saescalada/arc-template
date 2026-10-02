import NewsCard from "../components/NewsCard/NewsCard";
import { news } from "../data/news";

function NewsPage() {
  return (
    <section className="page">
      <div className="page-container">
        <div className="page-heading">
          <span>STAY UPDATED</span>
          <h1>NEWS</h1>
        </div>

        <div className="news-page-grid">
          {news.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsPage;
