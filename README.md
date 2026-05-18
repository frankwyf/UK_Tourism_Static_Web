# UK Tourism Static Website

[中文说明](README.zh-CN.md) | [日本語説明](README.ja.md)

This repository is an open-source static tourism website focused on the United Kingdom, engineered as a production-style front-end portfolio project.

## Project Positioning
- Public, reusable static website codebase
- Multi-page information architecture for England, Wales, Scotland, and Northern Ireland
- Front-end implementation that emphasizes robust HTML semantics, CSS organization, and JavaScript-driven interaction

## Core Features
- Multi-page navigation with persistent entry points and section anchors
- Rich media integration (images, audio, and video with poster/fallback-friendly markup)
- Interactive modules including map rendering, dynamic clock/current-location utilities, and page-level scripts
- Browser-side storage and lightweight state persistence via Web Storage
- Responsive behavior built with custom styles and Bootstrap-based layout helpers

## Privacy Sanitization
Sensitive personal information has been removed from publishable site files:
- personal names
- personal identifiers
- personal email addresses

The website content and layout are preserved, with only privacy-related text replacements.

## Project Structure
- site/: runnable final website (original relative asset structure preserved)
- docs/: project and open-source documentation

## Run Locally
1. Open site/index.html in a browser
2. If your browser blocks local media/file behaviors, run a static server in this folder

## Engineering Highlights
- Consistent relative-path asset strategy across nested pages and media directories
- Practical separation of concerns between structure (HTML), presentation (CSS), and behavior (JS)
- Graceful progressive enhancement: pages remain readable with reduced script capability
- Cross-page component reuse patterns for navigation, footer, and utility scripts

## Notes
- For strict visual parity, resources and file layout were not flattened into a single folder.
- The current structure is intentionally organized for maintainability while preserving original path behavior.

## Large Media Package
- GitHub has a hard 100 MB file limit per file. Two original videos were excluded from git history for publishability.
- A separate media package is provided for full local playback: `UK_Tourism_media_pack.zip`.
- Extract the zip at the project root so the original paths are restored under `site/`.
- After extraction, videos on corresponding pages will play in the full experience build.

## Open Source Docs
- Contributor Guide: docs/CONTRIBUTING.md
- Code of Conduct: docs/CODE_OF_CONDUCT.md
- Security Policy: docs/SECURITY.md
- Changelog: docs/CHANGELOG.md
- License: LICENSE
