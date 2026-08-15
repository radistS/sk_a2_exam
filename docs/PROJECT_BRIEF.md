# Project Brief & Technical Specification

## Slovak A2 Exam Trainer

Version: 0.1

## Vision

Create a web platform for learning Slovak and preparing for the Slovak A2 language exam.

The platform should combine structured theory, practical exercises, mistake analysis, weak-topic practice, progress tracking and realistic mock exams.

Primary learning loop:

> Learn → Practice → Test → Identify mistakes → Explain the rule → Practice weak areas → Mock exam

## Languages

The platform is bilingual from the beginning:

- Slovak (`sk`) — primary learning language
- Ukrainian (`uk`) — explanations, translations and learner support

The architecture must allow additional languages later without rewriting lesson content.

## MVP technical direction

Frontend:

- React
- TypeScript
- Vite
- React Router

Content:

- Markdown for theory
- JSON for exercises, tests, metadata and manifests

Progress:

- browser localStorage in MVP
- all persistence hidden behind a `ProgressRepository` interface
- future backend implementation should not require UI rewrites

Deployment:

- GitHub Actions
- GitHub Pages

## Architectural principle

Educational content must be independent from application code.

React components render content; they do not contain the curriculum.

Adding a new lesson or exercise should normally mean adding a content file, not editing React source code.

## Reference-source strategy

### Exam sources

Primary authority for:

- exam structure
- tested skills
- scoring/evaluation criteria
- timing
- task formats
- official/sample exam materials

These sources define what the learner needs to be able to do at A2.

### Learning sources

Textbooks and exercise books may be used to understand:

- topic progression
- grammar progression
- vocabulary scope
- expected A1/A2 difficulty
- useful exercise mechanics

`Krížom-krážom: Slovenčina A1 + A2, Cvičebnica` is one such reference source.

Learning-source exercises are not copied into the platform. We create original exercises inspired by the learning objectives and mechanics.

## Content hierarchy

```text
Exam requirements
    ↓
Skills
    ↓
Topics / Grammar
    ↓
Lessons
    ↓
Exercises
    ↓
Tests
    ↓
Mock exams
```

## MVP modules

1. Home
2. Theory
3. Practice
4. Tests
5. Mock exam
6. Progress
7. Mistake review

## Exercise types

Initial types:

- `multiple-choice`
- `fill-gap`
- `matching`
- `ordering`
- `true-false`
- `word-building`
- `sentence-building`
- `reading-comprehension`
- `dialogue-gap`
- `grammar-transformation`
- `writing-prompt`

The application must use an exercise renderer registry so new exercise types can be added without changing existing content.

## Progress abstraction

```ts
interface ProgressRepository {
  getProgress(): Promise<UserProgress>;
  saveProgress(progress: UserProgress): Promise<void>;
  resetProgress(): Promise<void>;
}
```

MVP implementation: `LocalStorageProgressRepository`.

Future implementation: `ApiProgressRepository`.

## Non-functional requirements

- responsive desktop/mobile UI
- UTF-8 throughout
- Slovak diacritics supported everywhere
- Ukrainian Cyrillic supported everywhere
- content validation before deployment
- content IDs are stable and unique
- no copyrighted textbook exercises copied verbatim
