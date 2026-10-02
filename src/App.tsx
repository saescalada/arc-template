import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import GameDetailPage from "./pages/GameDetailPage";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import NewsPage from "./pages/NewsPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import AboutPage from "./pages/AboutPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import NotFoundPage from "./pages/NotFoundPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/games" element={<GamesPage />} />

          <Route path="/games/:slug" element={<GameDetailPage />} />

          <Route path="/news" element={<NewsPage />} />

          <Route path="/news/:slug" element={<NewsDetailPage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="*" element={<NotFoundPage />} />

          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
