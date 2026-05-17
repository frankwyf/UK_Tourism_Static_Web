# UK Tourism Static Website (Merged Final Edition)

[中文说明](README.zh-CN.md) | [日本語説明](README.ja.md)

This repository contains a full migration of the original CWK1 and CWK2 coursework websites into one final open-source edition.

## What Was Merged
- Base selected: CWK2 final work (feature-complete and richer structure)
- Deduplication: CWK1 and CWK2 were compared; identical content was merged into one final edition
- Preservation rule: page structure, visual style, and interaction behavior are kept as-is from the original final build

## Privacy Sanitization
Sensitive personal information has been removed from publishable site files:
- personal names
- student IDs
- personal email addresses

The website content and layout remain equivalent to the original final site, with only privacy-related text replacements.

## Project Structure
- site/: runnable final website (original relative asset structure preserved)
- docs/: project and open-source documentation

## Run Locally
1. Open site/index.html in a browser
2. If your browser blocks local media/file behaviors, run a static server in this folder

## Notes
- For strict visual parity, resources and file layout were not flattened into a single folder.
- The current structure is intentionally organized for maintainability while preserving original path behavior.

## Open Source Docs
- Contributor Guide: docs/CONTRIBUTING.md
- Code of Conduct: docs/CODE_OF_CONDUCT.md
- Security Policy: docs/SECURITY.md
- Changelog: docs/CHANGELOG.md
- License: LICENSE
