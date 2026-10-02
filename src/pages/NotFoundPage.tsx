import { Link } from "react-router-dom";

import "../styles/not-found.css";

function NotFoundPage() {
  return (
    <section className="not-found">
      <div className="not-found-container">
        <span className="not-found-code">404</span>

        <h1>
          LOST IN
          <br />
          ANOTHER WORLD.
        </h1>

        <p>The page you're looking for doesn't exist or may have been moved.</p>

        <Link to="/" className="not-found-button">
          BACK TO HOME
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
