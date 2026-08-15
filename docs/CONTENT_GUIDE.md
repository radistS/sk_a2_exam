# Content Authoring Guide

This document defines how educational content should be created for Slovak A2 Exam Trainer.

## 1. Core rules

Every content item must:

- have a stable unique ID
- declare CEFR level
- declare topic and/or grammar tags
- use Slovak as the learning language
- provide Ukrainian support where useful
- contain original wording
- be valid against the repository schemas

Do not embed curriculum content directly into React components.

## 2. Source policy

Reference sources are research material, not content to copy.

Allowed uses:

- identify exam skills and structure
- identify grammar and vocabulary scope
- understand A2 difficulty
- understand common exercise mechanics
- identify topic progression

Do not:

- copy textbook exercises verbatim
- copy answer sets verbatim
- reproduce full sample exams unless redistribution is explicitly permitted
- closely paraphrase a source exercise while keeping its distinctive wording/data

Create a new scenario, wording, names, values and answer choices.

## 3. Languages

Use locale codes:

- `sk`
- `uk`

Example:

```json
{
  "title": {
    "sk": "Rodina",
    "uk": "Сім'я"
  }
}
```

## 4. IDs

Use lowercase kebab-case.

Examples:

```text
grammar-cases-genitive-001
vocab-family-003
reading-travel-002
mock-a2-001
```

Never reuse an ID for a different exercise.

## 5. Difficulty

Use:

- `easy`
- `medium`
- `hard`

Difficulty is relative to the declared CEFR level.

## 6. Explanation quality

When an exercise has a deterministic answer, provide an explanation where useful.

A good explanation should tell the learner:

1. why the correct answer is correct;
2. which rule or vocabulary item is being tested;
3. why a common wrong answer is wrong when relevant.

Ukrainian explanations should help understanding rather than simply repeat the Slovak text.

## 7. Exercise design

Prefer realistic everyday A2 contexts:

- family
- home
- work
- shopping
- food
- travel
- transport
- health
- appointments
- services
- weather
- leisure
- communication
- Slovakia and everyday life

Avoid unnecessary advanced vocabulary that changes the task from grammar/skill practice into vocabulary guessing.

## 8. Exam alignment

Every exam-style item should eventually reference one or more exam skills, for example:

```text
reading
listening
writing
speaking
language-use
```

Mock exams must be modeled from verified exam requirements, not from textbook chapter structure.

## 9. Review checklist

Before merging new content, check:

- Slovak grammar and spelling
- Ukrainian grammar and spelling
- exactly one intended answer where applicable
- plausible distractors
- level appropriate for A2
- explanation matches the answer
- tags are correct
- IDs are unique
- no copied source wording
