import type { Game } from "../types/game";
import omenArtwork from "../assets/images/hero-test.jpg";

// Keep this collection limited to confirmed, publicly announced games.
export const featuredGames: Game[] = [
  {
    id: 1,
    slug: "omen-of-sorrow",
    title: "Omen of Sorrow",
    category: "AVAILABLE NOW",
    description: "Monsters of myth, literature and horror face off in a 2.5D fighting game. Discover a dark world of legendary creatures, handcrafted combat and classic arcade spirit.",
    image: omenArtwork,
    cardImage: omenArtwork,
    genre: "2.5D Fighting",
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    releaseDate: "Available now",
  },
];

