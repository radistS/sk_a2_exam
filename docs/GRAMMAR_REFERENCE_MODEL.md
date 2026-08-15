# Grammar Reference Model

This document defines the structured grammar-reference layer used by Slovak A2 Exam Trainer.

## Goal

Grammar reference content should be reusable across:

- theory pages;
- quick-reference tables;
- exercise feedback;
- mistake explanations;
- weak-area recommendations;
- exception drills;
- pre-exam revision.

The UI must not hardcode grammar tables or exception lists.

## Core entities

### 1. Grammar table

Use for structured forms that learners should visually compare.

Examples:

- persons: 1st / 2nd / 3rd person;
- singular / plural;
- conjugation of `byť`, `mať`, modal verbs;
- present / past / future forms;
- cases and their questions;
- noun endings;
- adjective agreement;
- pronouns;
- prepositions + required case;
- comparison forms;
- numeral patterns.

A grammar table is stored as JSON and rendered by the UI.

### 2. Rule

A standard grammar rule with localized explanation and examples.

### 3. Exception

An irregular form or explicit exception to a rule.

Exceptions must be first-class entities so they can be practiced separately.

### 4. Tip

A memory aid, warning or usage hint.

## Recommended directory

```text
content/grammar-reference/
├── a1/
│   ├── persons/
│   ├── verbs/
│   ├── cases/
│   └── prepositions/
└── a2/
    ├── verbs/
    ├── cases/
    ├── adjectives/
    └── exceptions/
```

## Grammar table example

```json
{
  "id": "verb-byt-present",
  "type": "grammar-table",
  "level": "A1",
  "category": "verbs",
  "title": {
    "sk": "Sloveso byť – prítomný čas",
    "uk": "Дієслово byť – теперішній час"
  },
  "columns": [
    { "id": "person", "label": { "sk": "Osoba", "uk": "Особа" } },
    { "id": "pronoun", "label": { "sk": "Zámeno", "uk": "Займенник" } },
    { "id": "form", "label": { "sk": "Tvar", "uk": "Форма" } }
  ],
  "rows": [
    { "person": "1sg", "pronoun": "ja", "form": "som" },
    { "person": "2sg", "pronoun": "ty", "form": "si" },
    { "person": "3sg", "pronoun": "on / ona / ono", "form": "je" },
    { "person": "1pl", "pronoun": "my", "form": "sme" },
    { "person": "2pl", "pronoun": "vy", "form": "ste" },
    { "person": "3pl", "pronoun": "oni / ony", "form": "sú" }
  ],
  "ruleIds": ["byt-present-basic"],
  "exceptionIds": [],
  "tags": ["verbs", "byt", "present-tense"]
}
```

## Exception example

```json
{
  "id": "ist-irregular-past",
  "type": "exception",
  "level": "A2",
  "category": "verbs",
  "title": {
    "sk": "Nepravidelný minulý čas slovesa ísť",
    "uk": "Неправильна форма минулого часу дієслова ísť"
  },
  "explanation": {
    "sk": "Sloveso ísť má nepravidelné tvary minulého času.",
    "uk": "Дієслово ísť має неправильні форми минулого часу."
  },
  "forms": ["išiel", "išla", "išli"],
  "examples": ["Peter išiel domov.", "Mária išla do práce.", "Deti išli do školy."],
  "relatedRuleIds": ["past-tense-basic"],
  "tags": ["verbs", "past-tense", "irregular"]
}
```

## Visual-choice practice

Some grammar knowledge is best learned by visually distinguishing similar forms.

Supported exercise intentions:

- `form-choice` — select the correct grammatical form;
- `spelling-choice` — select the correctly spelled word/form;
- `exception-choice` — select the correct irregular/exception form;
- `contrast-choice` — distinguish two or more visually similar forms.

Distractors should be pedagogical, not random. Typical distractor sources:

- wrong gender;
- wrong number;
- wrong person;
- wrong case ending;
- wrong tense;
- incorrect auxiliary verb;
- common spelling error;
- regularized form of an irregular verb;
- visually similar but grammatically wrong form.

## Feedback behavior

When a learner answers incorrectly, feedback may display:

1. correct answer;
2. relevant rule;
3. grammar table row(s);
4. related exception;
5. one short explanation;
6. action: `Practice this rule` or `Practice this exception`.

## Validation

Validation must check:

- unique grammar-table IDs;
- unique rule/exception IDs;
- all referenced `ruleIds` exist;
- all referenced `exceptionIds` exist;
- table row keys match defined columns;
- required SK/UK labels exist;
- visual-choice exercises contain the correct option among choices;
- exception drills reference a real exception.
