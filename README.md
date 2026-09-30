# Jenna Gozali – Portfolio

Personal portfolio site built with Next.js. All content lives in `lib/data.js`.

## Run it on your computer (optional)

1. Install Node.js 20 or newer from https://nodejs.org
2. In this folder, run:
   ```
   npm install
   npm run dev
   ```
3. Open http://localhost:3000

## Deploy to Vercel

1. Create a new repository on GitHub (e.g. `portfolio`) and upload everything in this folder.
   Do not upload `node_modules` or `.next` if you ran it locally.
2. Go to https://vercel.com, sign in with GitHub, click **Add New → Project**, pick the repository and click **Deploy**.
   Vercel detects Next.js automatically; no settings need changing.
3. After about a minute you get a live link like `your-project.vercel.app`.
   You can rename it under **Settings → Domains**.

Every time you push a change to GitHub, Vercel redeploys automatically.

## Editing content

- Text for every section and case study: `lib/data.js`
- Images: `public/images/`
- Downloadable PDFs: `public/docs/`
- Colours and fonts: `app/globals.css` (top of the file)
