# Content Model

This document defines the initial repository content model for Slovak A2 Exam Trainer.

## Topic package

Each learning topic is self-contained.

Example:

```text
content/grammar/a2/past-tense/
├── topic.json
├── theory.sk.md
├── theory.uk.md
├── rules.json
└── exercises.json
```

Vocabulary example:

```text
content/vocabulary/a2/travel/
├── topic.json
├── words.json
└── exercises.json
```

## Topic metadata

```json
{
  "id": "past-tense",
  "type": "grammar",
  "level": "A2",
  "order": 10,
  "status": "published",
  "title": {
    "sk": "Minulý čas",
    "uk": "Минулий час"
  },
  "description": {
    "sk": "Tvorenie a používanie minulého času.",
    "uk": "Утворення та використання минулого часу."
  },
  "tags": ["verbs", "tense"]
}
```

Allowed statuses:

- `draft`
- `review`
- `published`

Only `published` content is exposed in production.

## Rule entity

Rules and exceptions are reusable entities. Exercises reference them by ID.

```json
{
  "id": "genitive-after-do",
  "type": "rule",
  "level": "A2",
  "title": {
    "sk": "Genitív po predložke do",
    "uk": "Родовий відмінок після прийменника do"
  },
  "explanation": {
    "sk": "Predložka do sa spája s genitívom.",
    "uk": "Прийменник do вимагає родового відмінка."
  },
  "examples": ["do obchodu", "do školy", "do práce"],
  "exceptions": []
}
```

Allowed rule types:

- `rule`
- `exception`
- `tip`

## Exercise entity

```json
{
  "id": "past-tense-001",
  "type": "multiple-choice",
  "level": "A2",
  "topicId": "past-tense",
  "difficulty": "easy",
  "question": "Včera som ___ do práce.",
  "options": ["idem", "išiel", "pôjdem"],
  "correctAnswer": "išiel",
  "ruleIds": ["past-tense-basic"],
  "explanation": {
    "sk": "Slovo „včera“ označuje minulý čas.",
    "uk": "Слово «včera» вказує на минулий час."
  },
  "tags": ["past-tense", "verbs"]
}
```

Initial exercise types:

- `multiple-choice`
- `fill-gap`
- `choose-sentence`
- `translation-choice`
- `matching`
- `ordering`
- `true-false`
- `word-building`
- `sentence-building`
- `reading-comprehension`
- `dialogue-gap`
- `grammar-transformation`
- `writing-prompt`

Initial difficulties:

- `easy`
- `medium`
- `exam`

## Vocabulary entity

```json
{
  "id": "travel-ticket",
  "level": "A2",
  "topicId": "travel",
  "lemma": "lístok",
  "translation": {
    "uk": "квиток"
  },
  "partOfSpeech": "noun",
  "gender": "masculine",
  "examples": [
    {
      "sk": "Kúpim si lístok na vlak.",
      "uk": "Я куплю квиток на потяг."
    }
  ],
  "tags": ["travel", "transport"]
}
```

## Reading content

Reading texts should be stored as original Slovak texts with metadata and comprehension tasks. Ukrainian translation should not normally be displayed during exam-style tasks, but may be available in learning mode.

## Mock exams

Mock exams are separate content packages from ordinary practice. They reference task IDs and define ordering, scoring and section structure.

```text
content/exams/a2/mock-001/
├── exam.json
├── reading/
├── writing/
└── tasks.json
```

Mock-exam structure must be based on verified exam requirements.

## Cross references

Validation must ensure:

- every `topicId` exists;
- every `ruleId` exists;
- IDs are unique repository-wide within their entity type;
- required SK/UK fields exist;
- exercise answer definitions are internally valid;
- production indexes include only `published` topics.

## Generated index

The build process will scan `content/`, validate it and generate:

```text
generated/content-index.json
```

React must discover available curriculum from this generated index instead of maintaining a manual topic list.
