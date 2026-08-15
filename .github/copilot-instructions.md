# GitHub Copilot Instructions — Slovak A2 Exam Trainer

## Project

Bilingual Slovak/Ukrainian platform for Slovak A1/A2 learning and Slovak A2 exam preparation.

## Technical stack

- React
- TypeScript
- Vite
- Markdown + JSON educational content
- localStorage for MVP progress
- GitHub Actions + GitHub Pages
- no backend in MVP

## Architecture rules

1. Educational content must not be hardcoded in React components.
2. All curriculum content belongs under `content/`.
3. UI components must not access `localStorage` directly.
4. Progress persistence must go through a `ProgressRepository` abstraction.
5. All user-facing UI strings must be externalized for localization.
6. Initial UI languages are Slovak (`sk`) and Ukrainian (`uk`).
7. New content must be discoverable automatically during the build.
8. Content validation failures must fail the build/deployment.
9. Only content with `status: published` is visible in production.
10. Rules, exceptions and tips are reusable domain entities and exercises should reference relevant rule IDs.

## Learning behavior

Incorrect answers must teach the learner. When appropriate, feedback should include:

- correct answer
- relevant rule
- short explanation
- examples
- exception information
- action to practice the related rule/topic again

## Content-source rules

Reference materials are used to understand:

- exam structure and criteria
- curriculum scope
- grammar/vocabulary progression
- A1/A2 difficulty
- exercise mechanics

Do not copy copyrighted textbook exercises or distinctive sample-test wording. Generate original educational content.

## Exercise design

Supported initial exercise families include:

- multiple choice
- fill the gap
- matching
- ordering
- true/false
- sentence building
- reading comprehension
- dialogue gaps
- grammar transformations
- writing prompts

Use an extensible renderer/registry design rather than large conditional blocks scattered through the UI.

## TypeScript

- prefer explicit domain types
- avoid `any`
- keep content DTOs separate from UI view models when transformation is required
- keep domain/business logic outside presentation components
- use dependency inversion for persistence and other replaceable infrastructure

## MVP constraints

Do not introduce authentication, backend services, databases, AI tutor, listening or speaking infrastructure unless a later requirement explicitly adds them.
