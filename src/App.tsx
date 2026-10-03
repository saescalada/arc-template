import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import GameDetailPage from "./pages/GameDetailPage";
import GamesPage from "./pages/GamesPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import NemoPage from "./pages/NemoPage";
import ClientsPage from "./pages/ClientsPage";
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

          <Route path="/services" element={<ServicesPage />} />
          <Route path="/nemo" element={<NemoPage />} />
          <Route path="/clients" element={<ClientsPage />} />
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
