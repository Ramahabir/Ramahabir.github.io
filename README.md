# Rama — Developer Portfolio

A responsive, single-page software developer portfolio built with Next.js and
exported as a static site for GitHub Pages.

## Local development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Personalize the site

The placeholder biography, projects, experience, skills, email address, and
profile links are centralized in `app/portfolio.tsx`. Update these before
publishing. Portfolio metadata lives in `app/layout.tsx`.

## Publish with GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. The included workflow builds and deploys the site automatically.

Every push to `main` triggers a new deployment. The workflow automatically
configures the correct repository subpath, so assets work on project Pages URLs.

## Checks

```bash
npm test
npm run lint
```
