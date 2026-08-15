# Slovak A2 Trainer

Bilingual Slovak/Ukrainian web platform for actively learning Slovak from A1 foundations to A2 exam readiness.

## Phase 1

The product starts with two connected learning engines:

- **Vocabulary** — visual cards, context, multiple exercise modes and spaced review
- **Grammar** — visual lessons, rules, exceptions, mistake explanations and targeted remediation

They converge into **Mixed Practice**. Reading, Writing and full A2 Exam Practice are built on top of this learning foundation. Listening and Speaking come later.

## Learning loop

> Learn → Practice → Make mistakes → Understand why → Practice weak material → Review → Use in context → Exam preparation

## Curriculum strategy

- Official Slovak A1/A2 standards and official A2 exam materials define **what must be learned**.
- Krížom-krážom A1/A2 is a reference for vocabulary scope, grammar progression, learner difficulty and exercise mechanics.
- Published exercises, examples and explanations are original; textbook exercises are not copied.

## Content-first architecture

Before mass generation we maintain two master curriculum maps:

```text
content/maps/vocabulary-map.json
content/maps/grammar-map.json
```

Educational content lives outside React components. Stable IDs connect words, grammar rules, exercises, mistakes and review progress.

## Phase 1 navigation

```text
Home / Today
├── Vocabulary
├── Grammar
├── Mixed Practice
├── Review / Mistakes
└── Progress

A2 Exam Preparation → later learning stage
```

## MVP stack

- React
- TypeScript
- Vite
- JSON + Markdown content
- localStorage behind a repository abstraction
- GitHub Actions
- GitHub Pages

## Repository structure

```text
content/
  maps/          Master vocabulary + grammar maps
  vocabulary/    Vocabulary topics and cards
  grammar/       Grammar lessons, rules and exercises
  mixed/         Cross-module contextual practice
  exam-skills/   Later exam-preparation content
schemas/         Content validation schemas
docs/            Product, learning and technical specifications
src/             Application UI and learning engines
.github/         Workflows and project instructions
```

See `docs/PROJECT_BRIEF.md` for the current product and learning specification.