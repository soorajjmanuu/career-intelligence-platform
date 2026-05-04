# Developer Intelligence Dashboard

A recruiter-ready developer portfolio powered by live GitHub data, responsive project cards, language skill bars, dark mode, resume download, and contact links.

## Features

- Live GitHub profile metrics: followers, repositories, stars, forks, languages, and recent public activity
- Dynamic GitHub username input
- Projects generated from public, non-archived GitHub repositories
- Resume download from `/public/resume.pdf`
- Contact section with email, LinkedIn, GitHub, and mailto form UI
- Dark mode toggle using Tailwind class mode
- Modular App Router component structure

## Setup

1. Install dependencies:

```bash
npm install
```

2. Add a resume file:

```text
public/resume.pdf
```

3. Create `.env.local`:

```bash
GITHUB_TOKEN=your_github_token
NEXT_PUBLIC_GITHUB_USERNAME=your-github-username
NEXT_PUBLIC_PORTFOLIO_NAME=Your Name
NEXT_PUBLIC_PORTFOLIO_ROLE=Full-Stack Developer
NEXT_PUBLIC_PORTFOLIO_EMAIL=you@example.com
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/your-profile
NEXT_PUBLIC_PORTFOLIO_SUMMARY=I build reliable, user-focused software with clean architecture and measurable outcomes.
```

`GITHUB_TOKEN` stays server-side. The `NEXT_PUBLIC_` values are safe to expose in the browser and are used for portfolio customization.

## Run

```bash
npm run dev
```

Open `http://localhost:3000`.

## Verify

```bash
npm run lint
npm run build
```

## Deploy on Vercel

Add the same environment variables in Vercel Project Settings, include `public/resume.pdf`, and deploy. The GitHub API route uses `GITHUB_TOKEN` for higher rate limits and works with the Next.js App Router.

created by sooraj.k