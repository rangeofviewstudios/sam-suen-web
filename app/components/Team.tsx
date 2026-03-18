"use client";

import { useReveal } from "../hooks/useReveal";
import "./Team.css";

const teamMembers = [
  {
    name: "Sam Suen",
    tag: "Artist",
    role: "Vocalist, Songwriter, Performer",
  },
  {
    name: "Granger Wang",
    tag: "Photographer",
    role: "Visual Direction & Photography",
  },
  {
    name: "Rana Arshad",
    tag: "Manager",
    role: "Management & Strategy",
  },
  {
    name: "Ayush Basu",
    tag: "Engineer",
    role: "Mixing & Audio Engineering",
  },
];

export default function Team() {
  const r1 = useReveal();
  const r2 = useReveal();

  return (
    <section className="team" id="team">
      <div className="team-container">
        <div className="team-header">
          <span
            ref={r1.ref}
            className={`section-eyebrow reveal-up ${r1.isVisible ? "visible" : ""}`}
          >
            The Team
          </span>
          <h2
            ref={r2.ref}
            className={`section-title reveal-up delay-1 ${r2.isVisible ? "visible" : ""}`}
          >
            Built with
            <br />
            <em>the right people.</em>
          </h2>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({
  member,
  index,
}: {
  member: (typeof teamMembers)[number];
  index: number;
}) {
  const r = useReveal();

  return (
    <div
      ref={r.ref}
      className={`team-card reveal-up delay-${index + 2} ${r.isVisible ? "visible" : ""}`}
    >
      <div className="team-card-shell">
        <div className="team-card-inner">
          <div className="team-role-tag">{member.tag}</div>
          <h3 className="team-name">{member.name}</h3>
          <p className="team-role">{member.role}</p>
          <div className="team-accent-line" />
        </div>
      </div>
    </div>
  );
}
