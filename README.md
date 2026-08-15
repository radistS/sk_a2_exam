# Slovak A2 Exam Trainer

Bilingual Slovak/Ukrainian web platform for learning Slovak and preparing for the Slovak A2 language exam.

## Goals

- Learn → Practice → Test → Identify mistakes → Explain the rule → Practice weak areas → Mock exam
- Content-driven architecture: educational content lives outside React components
- Slovak (`sk`) + Ukrainian (`uk`) from day one
- Static MVP with local progress in browser storage
- Easy migration to backend/cloud progress later

## Planned MVP stack

- React
- TypeScript
- Vite
- Markdown
- JSON
- localStorage behind a repository abstraction
- GitHub Actions
- GitHub Pages

## Repository structure

```text
content/      Educational content
schemas/      JSON schemas for content validation
docs/         Product and technical documentation
scripts/      Content validation/index generation tools
src/          Application source code (added after content model is finalized)
generated/    Build-generated content index
.github/      Workflows and Copilot instructions
```

## Content policy

Reference materials may be used to understand curriculum scope, grammar progression, exercise mechanics, difficulty and exam structure. Published content in this repository must be original and must not reproduce copyrighted textbook exercises or sample tests verbatim.

See `docs/` for architecture and content rules.
