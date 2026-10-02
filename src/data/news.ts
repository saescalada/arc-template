import type { News } from "../types/news";

import news1 from "../assets/images/news-1.jpg";
import news2 from "../assets/images/news-2.png";
import news3 from "../assets/images/news-3.jpg";

export const news: News[] = [
  {
    id: 1,
    slug: "project-zero-major-update",
    title: "PROJECT ZERO ANNOUNCES ITS FIRST MAJOR UPDATE",
    category: "GAMES",
    date: "SEP 30, 2026",
    image: news1,

    excerpt:
      "Project Zero receives its first major update with new content, improvements and more.",

    content:
      "The first major update for Project Zero is now available. This update introduces new content, gameplay improvements and several changes based on player feedback.",
  },

  {
    id: 2,
    slug: "neon-fighters-new-characters",
    title: "NEON FIGHTERS REVEALS NEW CHARACTERS",
    category: "NEWS",
    date: "SEP 25, 2026",
    image: news2,

    excerpt: "Meet the newest fighters joining the Neon Fighters roster.",

    content:
      "New challengers are entering the arena. Neon Fighters expands its roster with new characters, each featuring unique abilities and fighting styles.",
  },

  {
    id: 3,
    slug: "dark-legacy-gameplay-trailer",
    title: "DARK LEGACY GETS A NEW GAMEPLAY TRAILER",
    category: "TRAILER",
    date: "SEP 18, 2026",
    image: news3,

    excerpt: "A new gameplay trailer reveals more of the world of Dark Legacy.",

    content:
      "The latest Dark Legacy trailer offers a deeper look at combat, exploration and some of the environments players will discover during their journey.",
  },
];
