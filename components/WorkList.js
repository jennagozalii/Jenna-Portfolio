"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "@/lib/data";

export default function WorkList({ projects, showFilter = true }) {
  const [active, setActive] = useState("all");
  const shown = active === "all" ? projects : projects.filter((p) => p.tags.includes(active));
  const labelFor = (id) => categories.find((c) => c.id === id)?.label;

  return (
    <>
      {showFilter && (
        <div className="filters" role="group" aria-label="Filter work by skill">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={active === c.id}
              onClick={() => setActive(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
      )}
      <ul className="work-list">
        {shown.map((p) => (
          <li key={p.slug} className="work-item">
            <Link href={`/work/${p.slug}`} className="work-thumb" tabIndex={-1} aria-hidden="true">
              <img src={p.thumb} alt="" loading="lazy" />
            </Link>
            <div className="work-body">
              <p className="work-meta">
                {p.format}
                <span className="sep" aria-hidden="true">/</span>
                {p.tags.map(labelFor).join(", ")}
              </p>
              <h3>
                <Link href={`/work/${p.slug}`}>{p.title}</Link>
              </h3>
              <p>{p.short}</p>
            </div>
            {p.margin ? (
              <aside className="margin-note">
                <p>{p.margin}</p>
              </aside>
            ) : (
              <div />
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
