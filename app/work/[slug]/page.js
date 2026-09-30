import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.title} | Jenna Gozali`, description: p.short };
}

function Figure({ img }) {
  return (
    <figure>
      <a href={img.src} target="_blank" rel="noreferrer">
        <img src={img.src} alt={img.alt} loading="lazy" />
      </a>
      {img.caption && <figcaption>{img.caption}</figcaption>}
    </figure>
  );
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const index = projects.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="case wrap">
      <p className="back">
        <Link href="/#work">Back to all work</Link>
      </p>

      <header className="case-head">
        <h1>{p.title}</h1>
        <dl className="facts">
          <div>
            <dt>What it is</dt>
            <dd>{p.format}</dd>
          </div>
          <div>
            <dt>Who</dt>
            <dd>{p.credit}</dd>
          </div>
          <div>
            <dt>Tools and methods</dt>
            <dd>{p.tools.join(", ")}</dd>
          </div>
          <div>
            <dt>Context</dt>
            <dd>{p.kind === "side" ? "Personal project" : "dibimbing BA and Product Strategy Bootcamp"}</dd>
          </div>
        </dl>
        <p className="lede">{p.summary}</p>
        {p.links.length > 0 && (
          <p className="case-links">
            {p.links.map((l, i) => (
              <a key={l.href} className={i === 0 ? "button" : ""} href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </p>
        )}
      </header>

      <div className="case-body">
        {p.sections.map((s, i) => (
          <section key={i} className="case-section">
            {s.h && <h2>{s.h}</h2>}
            {s.p?.map((t) => (
              <p key={t}>{t}</p>
            ))}
            {s.list && (
              <ul className="bullets">
                {s.list.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}
            {s.table && (
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      {s.table.head.map((h) => (
                        <th key={h} scope="col">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {s.table.rows.map((r, ri) => (
                      <tr key={ri}>
                        {r.map((c, ci) => (
                          <td key={ci}>{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {s.after?.map((t) => (
              <p key={t}>{t}</p>
            ))}
            {s.images && (
              <div className={`figs ${s.layout || "single"}`}>
                {s.images.map((img) => (
                  <Figure key={img.src} img={img} />
                ))}
              </div>
            )}
          </section>
        ))}

        {p.note && (
          <aside className="margin-note big">
            <h2>{p.note.title}</h2>
            {p.note.p.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </aside>
        )}

        {p.next.length > 0 && (
          <section className="case-section">
            <h2>If I kept going</h2>
            <ul className="bullets">
              {p.next.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>
        )}
      </div>

      <nav className="next-case" aria-label="Next case study">
        <span className="muted">Next case study</span>
        <Link href={`/work/${next.slug}`}>{next.title}</Link>
      </nav>
    </article>
  );
}
