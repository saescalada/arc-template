import { Link, useParams } from "react-router-dom";

import { news } from "../data/news";
import "../styles/news-detail.css";

function NewsDetailPage() {
  const { slug } = useParams();

  const article = news.find((item) => item.slug === slug);

  if (!article) {
    return (
      <section className="news-not-found">
        <h1>NEWS NOT FOUND</h1>

        <Link to="/news">← BACK TO NEWS</Link>
      </section>
    );
  }

  return (
    <article className="news-detail">
      <header className="news-detail-header">
        <div className="news-detail-header-container">
          <Link to="/news" className="news-detail-back">
            ← BACK TO NEWS
          </Link>

          <div className="news-detail-meta">
            <span>{article.category}</span>
            <time>{article.date}</time>
          </div>

          <h1>{article.title}</h1>

          <p className="news-detail-excerpt">{article.excerpt}</p>
        </div>
      </header>

      <div className="news-detail-image">
        <img src={article.image} alt={article.title} />
      </div>

      <section className="news-detail-body">
        <div className="news-detail-content">
          <p>{article.content}</p>
        </div>
      </section>
    </article>
  );
}

export default NewsDetailPage;
