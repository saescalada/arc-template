import type { Game } from "../types/game";

import hero1 from "../assets/images/hero-test.jpg";
import hero2 from "../assets/images/hero-2.png";
import hero3 from "../assets/images/hero-3.jpg";

export const featuredGames: Game[] = [
  {
    id: 1,
    slug: "project-zero",
    title: "PROJECT ZERO",
    category: "FEATURED GAME",

    description:
      "Discover a new world and experience the next generation of action.",

    image: hero1,
    cardImage: hero1,

    genre: "Action / Fighting",

    platforms: ["PC", "PlayStation 5", "Xbox Series X|S"],

    releaseDate: "2026",
  },

  {
    id: 2,
    slug: "neon-fighters",
    title: "NEON FIGHTERS",
    category: "NEW RELEASE",

    description:
      "Fight your way through a futuristic world filled with powerful rivals.",

    image: hero2,
    cardImage: hero2,

    genre: "Fighting",

    platforms: ["PC", "PlayStation 5"],

    releaseDate: "2026",
  },

  {
    id: 3,
    slug: "dark-legacy",
    title: "DARK LEGACY",
    category: "COMING SOON",

    description: "A new adventure begins in a world consumed by darkness.",

    image: hero3,
    cardImage: hero3,

    genre: "Action RPG",

    platforms: ["PC", "PlayStation 5", "Xbox Series X|S"],

    releaseDate: "COMING SOON",
  },
];
