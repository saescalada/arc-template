import { Link } from "react-router-dom";
import "./NewsCard.css";
import type { News } from "../../types/news";

type Props = {
  item: News;
};

function NewsCard({ item }: Props) {
  return (
    <Link to={`/news/${item.slug}`} className="news-card">
      <div className="news-card-image">
        <img src={item.image} alt={item.title} />
      </div>

      <div className="news-card-meta">
        <span className="news-card-category">{item.category}</span>

        <span className="news-card-date">{item.date}</span>
      </div>

      <h3 className="news-card-title">{item.title}</h3>

      <span className="news-card-more">
        READ MORE
        <span>→</span>
      </span>
    </Link>
  );
}

export default NewsCard;
