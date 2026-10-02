import { Link } from "react-router-dom";
import "./NewsSection.css";

import NewsCard from "../NewsCard/NewsCard";
import { news } from "../../data/news";

function NewsSection() {
  return (
    <section className="news-section">
      <div className="news-container">
        <div className="news-header">
          <div>
            <span className="section-number">02</span>

            <h2>
              LATEST
              <br />
              NEWS
            </h2>
          </div>

          <Link to="/news" className="news-view-all">
            VIEW ALL NEWS
            <span>→</span>
          </Link>
        </div>

        <div className="news-grid">
          {news.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
