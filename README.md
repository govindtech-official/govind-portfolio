# Govind Raj Portfolio

A responsive, original cinematic portfolio inspired by a streaming-series portfolio reference. The design uses an opening sequence, profile selection, episode rail, poster-style project cards, and chapter-like sections. This is a static site with no backend, package installation, analytics, or external API.

## Preview locally

Open `index.html` in a browser. For a local web server, from this folder run:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Content notes

- The four profile modes are public navigation views. A choice is remembered only in the current browser session.
- Education and credentials are based on the details in the supplied screenshots. The IIT Patna foundation certificate roll number and access code are intentionally not displayed.
- Featured projects link to public repositories in Govind's GitHub account. Descriptions are limited to the repository README content.
- Learning areas are described as interests, without invented skill ratings.
- The contact email and profile links came from the user-provided screenshots and links.
- The portrait is stored at `assets/govind-portrait.png`.
- `404.html`, `robots.txt`, an SVG favicon, Open Graph metadata, and Person structured data are included. Add a canonical URL and sitemap after choosing a domain.

## Editing

Update the content in `index.html`. Profile behavior, intro, and skill-universe tabs are in `app.js`; visual styles and breakpoints are in `styles.css`.
