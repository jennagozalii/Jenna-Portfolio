import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/source-serif-4";
import "./globals.css";
import Link from "next/link";
import { profile } from "@/lib/data";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jenna Gozali | Business Analyst and Product portfolio",
  description:
    "Data analyst in Kuala Lumpur moving into business analysis and product. Case studies in requirements, product, delivery, UX and data.",
  openGraph: {
    title: "Jenna Gozali | Business Analyst and Product portfolio",
    description: "Case studies in requirements, product, delivery, UX and data.",
    images: ["/images/jenna.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <header className="site-header">
          <div className="wrap header-inner">
            <Link href="/" className="wordmark">Jenna Gozali</Link>
            <nav aria-label="Main">
              <Link href="/#work">Work</Link>
              <Link href="/#experience">Experience</Link>
              <Link href="/#certificates">Certificates</Link>
              <Link href="/#contact">Contact</Link>
            </nav>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer">
          <div className="wrap footer-inner">
            <p>
              The bootcamp case studies use real companies as examples. The ideas and numbers are my own or
              illustrative, and I'm not affiliated with any of these companies.
            </p>
            <p>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
