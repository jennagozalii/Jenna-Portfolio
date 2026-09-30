import WorkList from "@/components/WorkList";
import { profile, projects, experience, education, certificateGroups, extras } from "@/lib/data";

export default function Home() {
  const bootcamp = projects.filter((p) => p.kind === "bootcamp");
  const side = projects.filter((p) => p.kind === "side");

  return (
    <>
      <section className="hero wrap">
        <img className="hero-photo" src="/images/jenna.jpg" alt="Portrait of Jenna Gozali" width="700" height="932" />
        <div className="hero-text">
          <h1>Hi, I'm Jenna.</h1>
          <p className="lede">
            I'm a data analyst at Chubb Insurance in Kuala Lumpur. For four years I've been the one who builds the
            dashboard and then asks what it actually means for the business. Now I want to be closer to the decisions
            themselves, in business analysis and product.
          </p>
          <p>
            Most of what's here comes from dibimbing's Business Analyst and Product Strategy bootcamp: requirement
            documents, a PRD with a working prototype, wireframes, a Scrum plan and a project budget. Before that I spent
            time in fintech and banking at Juris Technologies and iMoney. I'm Indonesian, based in KL, and open to
            relocating.
          </p>
          <p className="hero-links">
            <a className="button" href={`mailto:${profile.email}`}>Email me</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </p>
        </div>
      </section>

      <section id="work" className="section wrap">
        <div className="section-head">
          <h2>Work</h2>
          <p className="section-intro">
            The margin notes are the part I'd most like you to read. They're the numbers that didn't add up, the scope
            that slipped, and what I did about it.
          </p>
        </div>
        <WorkList projects={bootcamp} />

        <h3 className="subhead">Side project</h3>
        <WorkList projects={side} showFilter={false} />
      </section>

      <section id="experience" className="section wrap">
        <div className="section-head">
          <h2>Experience</h2>
        </div>
        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.role + job.org}>
              <div className="when">{job.when}</div>
              <div>
                <h3>
                  {job.role}, <span className="org">{job.org}</span>
                </h3>
                <ul>
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <h3 className="subhead">Education</h3>
        <ul className="plain-list">
          {education.map((e) => (
            <li key={e.title}>
              <strong>{e.title}</strong>
              <span className="muted">
                {e.org}, {e.when}
              </span>
              <span>{e.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="certificates" className="section wrap">
        <div className="section-head">
          <h2>Certificates</h2>
        </div>
        <div className="cert-groups">
          {certificateGroups.map((g) => (
            <div key={g.group}>
              <h3>{g.group}</h3>
              <ul className="plain-list">
                {g.items.map((c) => (
                  <li key={c.name}>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noreferrer">
                        <strong>{c.name}</strong>
                      </a>
                    ) : (
                      <strong>{c.name}</strong>
                    )}
                    <span className="muted">
                      {c.issuer}
                      {c.when ? `, ${c.when}` : ""}
                      {c.href ? ". Verified link" : ""}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="subhead">Awards and leadership</h3>
        <ul className="plain-list two-col">
          {extras.map((x) => (
            <li key={x.title}>
              {x.href ? (
                <a href={x.href} target="_blank" rel="noreferrer">
                  <strong>{x.title}</strong>
                </a>
              ) : (
                <strong>{x.title}</strong>
              )}
              <span className="muted">{x.when}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="section wrap contact">
        <h2>Let's talk</h2>
        <p>
          I'm looking for Business Analyst, Product and Project roles, especially in financial services, insurance and
          tech. If something here is useful to your team, or you just want to trade notes on how you run sprints, I'd
          like to hear from you.
        </p>
        <p className="hero-links">
          <a className="button" href={`mailto:${profile.email}`}>Email me</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </p>
      </section>
    </>
  );
}
