import "./TeamMember.css";

import type { TeamMember as TeamMemberType } from "../../types/team";

type Props = {
  member: TeamMemberType;
  number: number;
};

function TeamMember({ member, number }: Props) {
  return (
    <article className="team-member">
      <div className="team-member-image">
        <img src={member.image} alt={member.name} />

        <span className="team-member-number">
          {String(number).padStart(2, "0")}
        </span>

        {(member.linkedin && member.linkedin !== "#" || member.twitter && member.twitter !== "#" || member.instagram && member.instagram !== "#") && <div className="team-member-socials">
          {member.linkedin && member.linkedin !== "#" && (
            <a href={member.linkedin} aria-label={`${member.name} LinkedIn`}>
              IN
            </a>
          )}

          {member.twitter && member.twitter !== "#" && (
            <a href={member.twitter} aria-label={`${member.name} X`}>
              X
            </a>
          )}

          {member.instagram && member.instagram !== "#" && (
            <a href={member.instagram} aria-label={`${member.name} Instagram`}>
              IG
            </a>
          )}
        </div>}
      </div>

      <div className="team-member-info">
        <h3>{member.name}</h3>

        <span>{member.role}</span>
      </div>
    </article>
  );
}

export default TeamMember;
