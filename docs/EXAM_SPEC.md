# Slovak A2 Exam — Description and Evaluation Criteria

Last reviewed: 2026-08-15

This document defines the exam-preparation target for Slovak A2 Exam Trainer.

## 1. Legal / official requirement

For long-term residence in Slovakia, Slovak language proficiency must be demonstrated at least at CEFR level A2 by successfully passing a language exam at an authorized language school or public university.

The legal requirement defines the minimum language level, but the exact organization, timing and task composition can differ between examination providers.

Therefore this project distinguishes between:

1. **mandatory target level** — CEFR A2;
2. **provider-specific exam format** — may vary;
3. **our canonical mock-exam model** — designed to cover the common skills and task types used by real providers.

## 2. What A2 means in practice

An A2 learner should be able to understand and use frequent expressions and simple language related to everyday life.

Typical communicative domains include:

- personal information;
- family and relationships;
- home and accommodation;
- work and study;
- shopping and services;
- food and restaurants;
- travel and public transport;
- health and doctor visits;
- appointments and plans;
- weather and leisure time;
- basic correspondence and telephone communication;
- everyday situations in Slovakia.

The learner is not expected to speak perfectly. The essential requirement is that communication remains understandable and functional in common situations.

## 3. Skills that must be prepared

The platform must prepare all four language skills:

### Reading — Čítanie s porozumením

The learner should be able to understand short and simple practical texts such as:

- notices;
- advertisements;
- schedules;
- messages and e-mails;
- short personal texts;
- simple instructions;
- short informational texts.

Typical tasks:

- multiple choice;
- true/false;
- matching;
- selecting a heading;
- finding specific information;
- short-answer comprehension questions.

### Listening — Počúvanie s porozumením

The learner should understand slow and clearly articulated speech about familiar everyday topics.

Typical material:

- short dialogues;
- announcements;
- telephone conversations;
- service situations;
- simple personal stories;
- instructions.

Typical tasks:

- multiple choice;
- true/false;
- matching speaker and information;
- identifying key details.

Listening infrastructure is outside the first technical MVP, but the content model must support it later.

### Writing — Písanie / Kompozícia

The learner should be able to produce short connected practical texts.

Typical tasks may include:

- short message;
- e-mail;
- invitation;
- reply to a message;
- simple description;
- form-like practical information;
- short text based on instructions.

### Speaking — Hovorenie / Ústna komunikácia

The learner should be able to communicate in familiar everyday situations using simple sentences.

Common task forms used by examination providers include:

- a short communication situation / role-play;
- answering simple personal questions;
- describing a picture;
- speaking briefly about a familiar topic.

## 4. Language-use competence

Some examination providers explicitly include a lexical-grammatical test, while others assess grammar and vocabulary indirectly through reading, writing and speaking.

For preparation purposes our platform therefore includes a separate **language-use** skill covering:

- vocabulary;
- grammatical forms;
- sentence structure;
- prepositions and cases;
- verb tense and aspect;
- agreement;
- common functional expressions.

This section is important for learning and diagnostics even when a particular exam provider does not have a standalone grammar paper.

## 5. Provider examples

Current providers do not all publish an identical test structure.

### Example: iCan language school

Published A2 exam information describes two broad parts:

**Written part**

- reading comprehension;
- listening comprehension;
- lexical-grammatical test;
- composition.

**Oral part**

- communication situation;
- picture description.

The provider states approximately three hours of net test time, plus waiting time for the oral part.

### Example: International House Bratislava

Published information describes:

**Written part — approximately 120 minutes**

- reading comprehension;
- writing;
- listening comprehension.

**Oral part — approximately 10 minutes**

- speaking, after successful completion of the written part.

This difference is the reason the trainer must not hardcode one commercial provider's exam structure as the only valid A2 format.

## 6. Canonical mock-exam model for this project

Our mock exam should cover all competencies likely to be relevant regardless of provider.

Recommended structure:

```text
Mock A2 Exam
│
├── Reading
├── Listening        [phase 2]
├── Language Use
├── Writing
└── Speaking         [guided/self-practice in initial versions]
```

For the initial web MVP:

```text
Reading
Language Use
Writing
Speaking preparation
```

Listening becomes fully interactive when audio infrastructure is added.

## 7. Evaluation philosophy

The platform must separate two concepts:

### Learning score

Used during ordinary exercises.

Purpose:

- find mistakes;
- identify weak topics;
- explain rules;
- recommend targeted practice.

A low learning score is not a failure; it is diagnostic information.

### Exam score

Used in mock exams.

Purpose:

- simulate exam pressure;
- avoid hints during the attempt;
- calculate skill-level results;
- estimate readiness.

## 8. Objective-task scoring

For automatically scored tasks:

```text
correct answer   = 1 point
incorrect answer = 0 points
unanswered       = 0 points
```

When a task contains several independently scorable items, points may be awarded per item.

No negative marking should be used unless a verified target exam specifically requires it.

## 9. Writing evaluation rubric

Writing cannot be judged reliably by simple exact-answer matching.

Use the following internal rubric, each dimension scored from 0 to 5.

### Task completion — 0–5

- 5 — all requested points are addressed clearly;
- 4 — almost all requirements are covered;
- 3 — main task is completed, but some information is missing;
- 2 — only part of the task is addressed;
- 1 — minimal relevant content;
- 0 — no meaningful response / unrelated response.

### Comprehensibility and organization — 0–5

Evaluate whether the text is understandable, logically ordered and appropriately connected for A2.

### Vocabulary — 0–5

Evaluate whether basic everyday vocabulary is sufficient for the task. Repetition is acceptable at A2 if the message remains clear.

### Grammar — 0–5

Evaluate control of basic sentence patterns and forms expected at A2. Errors are acceptable when they do not regularly prevent understanding.

### Orthography — 0–5

Evaluate spelling, Slovak diacritics and basic punctuation. Occasional mistakes are acceptable.

Maximum internal writing score: **25 points**.

## 10. Speaking evaluation rubric

Use five dimensions, each 0–5.

### Task completion — 0–5

Can the learner respond to the situation and communicate the required information?

### Comprehensibility — 0–5

Can the listener understand the intended message without excessive effort?

### Interaction — 0–5

Can the learner answer questions, react and keep a simple exchange going?

### Vocabulary and grammar — 0–5

Does the learner have enough basic language to express familiar ideas despite errors?

### Pronunciation and fluency — 0–5

Is speech sufficiently clear, with pauses and hesitation still compatible with A2 communication?

Maximum internal speaking score: **25 points**.

## 11. Recommended readiness thresholds

These thresholds are **trainer-internal readiness indicators**, not a claim about the official pass mark of every Slovak examination provider.

Suggested status:

```text
85–100%  Ready
70–84%   Almost ready
55–69%   Needs targeted practice
0–54%    Needs more preparation
```

Additionally, the learner should not rely on a strong result in one skill to hide a major weakness in another.

Recommended mock readiness rule:

- overall result at least 70%;
- no core skill below 50%.

If we later target one specific examination provider, its verified official scoring rules should override these trainer-internal thresholds.

## 12. Error taxonomy

Each failed task should eventually contribute one or more diagnostic error codes.

Examples:

```text
grammar.case.genitive
grammar.case.dative
grammar.tense.past
grammar.aspect
vocabulary.health
vocabulary.travel
reading.detail
reading.main-idea
writing.task-completion
writing.word-order
speaking.interaction
```

This allows the platform to turn an exam attempt into a personalized practice plan.

## 13. Mock exam behavior

During an exam attempt:

- no immediate correctness indication;
- no rule explanations;
- no hints;
- timer may be enabled by section;
- answers are reviewable before final submission when the target format permits it.

After submission:

- show overall result;
- show result by skill;
- show errors by topic/rule;
- explain mistakes;
- provide links to relevant theory;
- generate a weak-topic practice queue.

## 14. Source hierarchy

When sources conflict, use the following priority:

1. current Slovak legislation and official government information;
2. current published requirements of the specific examination provider being simulated;
3. CEFR A2 descriptors;
4. reputable Slovak-language teaching resources;
5. textbooks as curriculum/reference sources.

## 15. Current reference sources

Legal / residence requirement:

- IOM Migration Information Centre — Long-term residence, updated July 2026
- Act No. 404/2011 Coll. on Residence of Foreigners and applicable amendments

Exam-format examples:

- iCan language school — Slovak language examination for foreigners, A2
- International House Bratislava — Slovak A2 examination

Curriculum references:

- slovake.eu A2 course
- Krížom-krážom: Slovenčina A2
- Krížom-krážom: Slovenčina A1 + A2, Cvičebnica

## 16. Maintenance rule

Exam-related information is time-sensitive.

Before implementing or materially changing the mock-exam structure, verify:

- current legislation;
- recognized examination providers;
- current examination sections;
- current timing;
- current scoring/pass criteria if publicly available.

Record the review date at the top of this document whenever those facts are re-verified.
