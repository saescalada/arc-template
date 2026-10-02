import type { TeamMember } from "../types/team";

import team1 from "../assets/images/team-1.jpg";
import team2 from "../assets/images/team-2.jpg";
import team3 from "../assets/images/team-3.jpg";
import team4 from "../assets/images/team-4.jpg";

export const team: TeamMember[] = [
  {
    id: 1,
    name: "JOHN CARTER",
    role: "FOUNDER / CEO",
    image: team1,

    linkedin: "#",
    twitter: "#",
  },

  {
    id: 2,
    name: "SARAH MILLER",
    role: "CREATIVE DIRECTOR",
    image: team2,

    linkedin: "#",
    instagram: "#",
  },

  {
    id: 3,
    name: "ALEX MORGAN",
    role: "LEAD DEVELOPER",
    image: team3,

    linkedin: "#",
    twitter: "#",
  },

  {
    id: 4,
    name: "EMILY PARK",
    role: "ART DIRECTOR",
    image: team4,

    linkedin: "#",
    instagram: "#",
  },
];
