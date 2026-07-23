# Ayush Singh — Portfolio (MERN Stack)

A single-page personal portfolio built on the MERN stack, split into independent
`frontend/` and `backend/` folders so each can be deployed separately (e.g.
frontend on **Vercel**, backend on **Render**), matching the setup used for
CampusHub.

Design concept: a "circuit schematic" theme — ink-navy background, copper and
signal-teal accents, IBM Plex Sans/Mono typography, and section reference
designators (SRC, BIO, STK, OUT, EDU, SIG) styled like real schematic labels,
tying the site back to an engineering background.

## Structure

```
portfolio/
├── frontend/   React + Vite + Tailwind CSS
└── backend/    Node.js + Express + MongoDB (Mongoose)
```

## Frontend — local setup

```bash
cd frontend
npm install
cp .env.example .env   # set VITE_API_URL to your backend URL
npm run dev
```

Builds to static files with `npm run build` (output in `frontend/dist`).

**Deploying to Vercel:**
1. Push the `frontend/` folder to GitHub (or import the monorepo and set the
   Vercel project's Root Directory to `frontend`).
2. Framework preset: Vite. Build command: `npm run build`. Output dir: `dist`.
3. Add an environment variable `VITE_API_URL` pointing at your deployed
   backend, e.g. `https://your-api.onrender.com/api`.
4. `vercel.json` is already included so client-side routing/refresh works.

## Backend — local setup

```bash
cd backend
npm install
cp .env.example .env   # set MONGODB_URI and CLIENT_ORIGIN
npm run dev
```

Server starts on `http://localhost:5000` by default. Health check available
at `GET /api/health`.

**API routes:**
| Method | Route          | Description                       |
|--------|----------------|------------------------------------|
| GET    | `/api/health`  | Health check                       |
| POST   | `/api/contact` | Submit a contact form message      |
| GET    | `/api/contact` | List recent messages (last 100)    |

> In production, consider protecting `GET /api/contact` (e.g. with a simple
> API key or by removing it) since it currently returns submitted messages
> without authentication.

**Deploying to Render:**
1. Create a new Web Service from the `backend/` folder (Root Directory:
   `backend`).
2. Build command: `npm install`. Start command: `npm start`.
3. Add environment variables `MONGODB_URI` and `CLIENT_ORIGIN` (comma-separated
   list including your Vercel frontend URL — no trailing slash).
4. If the free tier cold-starts, ping `/api/health` periodically with a
   service like cron-job.org, as done for CampusHub.

## MongoDB

Create a free cluster on MongoDB Atlas, add a database user, whitelist
`0.0.0.0/0` (or Render's IPs), and copy the connection string into
`MONGODB_URI`.

## Content to personalize further

- Swap in your resume link/download in the Hero or Contact section if you'd
  like a "Download Resume" button.
- Add real screenshots for CampusHub and the e-commerce project inside
  `frontend/public/` and reference them in `Projects.jsx` for richer visuals.
- Update the second project's live/source links once it's deployed.
