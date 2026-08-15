# Learning Architecture

## Product model

```text
                         SLOVAK A2 TRAINER
                              SK + UA
                                 │
                   ┌─────────────┴─────────────┐
                   │                           │
              VOCABULARY                   GRAMMAR
                   │                           │
          cards + context              visual explanation
          images when useful           rules / exceptions / tips
          staged exercises             easy → medium → exam-style
          adaptive review              mistake remediation
                   │                           │
                   └─────────────┬─────────────┘
                                 │
                          MIXED PRACTICE
                                 │
                         REVIEW / MISTAKES
                                 │
                           A2 EXAM PREP
```

## Core entities

### VocabularyItem

A learnable word/phrase. It owns lexical metadata and links to topics, images, grammar and exercise capabilities.

### VocabularyTopic

A real-life thematic group. Topics can contain both A1 and A2 progression but each item keeps its CEFR level.

### GrammarTopic

A teachable grammar concept with visual concept, explanation, examples and ordered practice.

### Rule

A reusable explanation entity referenced by exercises and mistake feedback.

### Exception

An irregular form or exception linked to one or more rules/topics.

### Tip

A short usage or memory hint.

### Exercise

A learning interaction. Exercises reference the vocabulary items and/or grammar rules they train instead of duplicating curriculum metadata.

### ReviewState

Per-user learning state for a word/rule, persisted in localStorage for MVP.

## Vocabulary state machine

```text
NEW
 ↓
LEARNING
 ↓
FAMILIAR
 ↓
LEARNED
 ↓
REVIEW ────────┐
 ↑              │
 └── mistakes ──┘
```

Suggested MVP scheduling inputs:

- correct count
- incorrect count
- consecutive correct count
- last reviewed timestamp
- next review timestamp
- current status
- recent exercise types

Do not hard-code the scheduling algorithm into UI components.

## Vocabulary session

A short session should mix recognition and recall:

1. introduce word + image/context
2. Slovak → Ukrainian choice
3. image → Slovak recognition when image is useful
4. Ukrainian → Slovak recall
5. word completion
6. contextual sentence
7. schedule next review

Not every word requires every exercise type.

## Grammar lesson contract

Each complete grammar lesson should provide:

1. visual/infographic concept
2. short SK explanation
3. short UA explanation
4. reusable rules
5. examples
6. exceptions/tips where relevant
7. easy exercises
8. medium exercises
9. exam-style exercises
10. result summary
11. revision recommendation

## Mistake remediation

Every wrong answer should resolve to a teaching object.

```text
Exercise answer
   ↓ wrong
Correct answer
   ↓
ruleId / exceptionId
   ↓
WHY explanation
   ↓
example
   ↓
focused practice
   ↓
review state updated
```

Exercises should therefore include `ruleIds`, `vocabularyIds` and optionally `exceptionIds`.

## Mixed practice

Mixed practice is not a third disconnected curriculum. It composes existing vocabulary and grammar entities into real-life contexts.

Example:

- vocabulary topic: `cestovanie`
- vocabulary item: `vlak`
- grammar rule: Instrumental for means of transport
- prompt: `Cestujem do Bratislavy ___.`
- answer: `vlakom`

## Content quality gates

A topic is `publishable` only when:

- SK and UA text exists
- stable IDs are valid
- source/reference metadata is present
- examples are original
- exercises reference teaching rules where applicable
- wrong-answer explanations exist
- image usage is justified rather than decorative
- difficulty is appropriate for its level
- content has been reviewed

## Phase sequencing

### Phase 1A — curriculum foundation

- analyze Krížom-krážom A1/A2
- verify official standards
- complete both master maps

### Phase 1B — vertical slice

- 5 Vocabulary topics
- 5 Grammar topics
- vocabulary session engine
- grammar lesson engine
- mistake remediation
- local review scheduling
- mixed practice

### Phase 2 — scale learning content

Expand to complete A1/A2 vocabulary and grammar maps using the proven content contract.

### Phase 3 — exam preparation

Add Reading, Writing, exam-style Language Use and mock exam flows based on official format/criteria.

### Later

Listening and Speaking.