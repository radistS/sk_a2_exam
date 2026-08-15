# Slovak A2 Trainer — Project Brief & Learning Specification

Version: 0.2

## Vision

Build a bilingual Slovak/Ukrainian learning platform that teaches Slovak from A1 foundations through A2 exam readiness. The product is a trainer, not a static reference library.

Core loop:

> Learn → Practice → Make mistakes → Understand why → Practice the rule/word again → Review → Use in context → Exam preparation

## Languages

- Slovak (`sk`) — target language and primary learning content
- Ukrainian (`uk`) — translation, explanations, hints, mistake feedback and UI localization

## Phase 1 product scope

Phase 1 has two independent but connected learning modules:

1. **Vocabulary**
2. **Grammar**

They converge into **Mixed Practice**. Reading, Writing and full A2 Exam Practice follow after the learning core is proven. Listening and Speaking are postponed to later phases.

## Curriculum authority

### Official Slovak A1/A2 sources

Official standards, exam requirements and official/sample A2 materials determine **what** learners must know and what level of performance is expected.

They are the primary authority for:

- A1/A2 thematic scope
- grammar requirements
- exam relevance
- expected difficulty
- later reading/writing/exam-style tasks

### Krížom-krážom A1/A2

Krížom-krážom is an important reference for **how learning progresses**:

- vocabulary scope and progression
- thematic vocabulary groups
- grammar progression and teaching order
- learner difficulty
- useful phrases/collocations
- exercise mechanics

Do not copy textbook exercises. All published examples, exercises, quizzes, contextual sentences and review activities must be original.

## Vocabulary model

Vocabulary is organized primarily by real-life topic, not textbook lesson number.

Each vocabulary item may contain:

- stable ID
- Slovak word
- Ukrainian translation
- level (`A1`/`A2`)
- topic
- source/reference topic
- example sentence
- phrase/collocation
- image requirement
- grammatical information
- supported exercise types
- review priority

Images are used only when they improve memorization. Concrete words such as `vlak`, `dom`, `lekár` are good candidates; abstract words such as `pretože` should rely on context instead.

### Vocabulary learning flow

> NEW → Word + visual/context → SK→UA → Image→SK → UA→SK → Complete word → Context sentence → LEARNED → REVIEW

Word states:

- `NEW`
- `LEARNING`
- `FAMILIAR`
- `LEARNED`
- `REVIEW`

Incorrect words return more often. Stable words return less often. MVP progress is stored in browser localStorage behind a repository abstraction.

## Grammar model

Grammar is visual-first. Avoid long textbook-style pages.

Each grammar lesson follows:

> Infographic → Simple explanation → Rule SK/UA → Examples → Exceptions → Easy practice → Medium practice → Exam-style practice → Result → Recommended revision

Important concepts should use diagrams, infographics, comparisons or tables whenever useful: e.g. `KAM? → akuzatív` versus `KDE? → lokál`.

### First-class explanation entities

- `RULE` — standard grammatical rule
- `EXCEPTION` — irregular form that must be remembered
- `TIP` — usage or memorization hint

Every exercise should reference the rule that explains its answer whenever possible.

## Wrong answers must teach

An incorrect answer is not only a scoring event.

Required feedback flow:

> WRONG → Correct answer → Why? → RULE → Example → EXCEPTION (if relevant) → Practice this rule

The learner should be able to move directly from a mistake into focused remediation.

## Vocabulary + Grammar connection

Vocabulary and Grammar must converge in contextual exercises. Example: a `Cestovanie` vocabulary set later feeds Instrumental practice (`Cestujem vlakom`). Mixed exercises should reinforce vocabulary, grammar and real-life usage simultaneously.

## Official A2 thematic areas

The content map must cover and verify against official materials, including:

1. Priestor okolo nás
2. Život online
3. Práca a kariéra
4. Obchody a nakupovanie
5. Cestovanie a dovolenka
6. Slovensko a moja krajina
7. Rodina, priatelia a medziľudské vzťahy
8. Zdravie, životný štýl a šport

## Grammar scope

The final Grammar Content Map must be verified against official A1/A2 standards. Scope includes present/past/future tense, aspect, modal verbs, imperative, gender, adjective agreement, comparison, pronouns, numerals, negation, six cases, prepositions + cases, KDE/KAM, basic conditional constructions, relative clauses, word order, irregular verbs and common exceptions.

## Master content maps

Mass content generation must not begin until two master maps exist:

- `content/maps/vocabulary-map.json`
- `content/maps/grammar-map.json`

The maps are the curriculum backbone and source of truth for coverage, sequencing and content status.

## Content creation workflow

> Curriculum → Select topic → Theory → SK/UA explanation → Infographic → Rules → Exceptions → Examples → Exercises → Review → Publish

Do not generate thousands of exercises blindly. Start with a complete vertical slice of **5 vocabulary topics + 5 grammar topics**, test the learning experience, then scale.

## Recommended first vocabulary topics

1. Osobné údaje a zoznamovanie
2. Rodina a vzťahy
3. Domov a bývanie
4. Mesto a doprava
5. Jedlo a nakupovanie

These are provisional until Krížom-krážom A1/A2 and official requirements are cross-checked.

## Recommended first grammar topics

1. Present tense + `byť`
2. Noun gender + basic adjective agreement
3. Accusative in everyday use
4. KDE/KAM: Locative vs Accusative
5. Past tense + irregular `ísť`

These are provisional until the Grammar Content Map is verified.

## Product navigation — Phase 1

1. Home / Today
2. Vocabulary
3. Grammar
4. Mixed Practice
5. Review / Mistakes
6. Progress

Exam Preparation remains visible as the destination but is not the primary Phase 1 workflow.

## Technical direction

- React + TypeScript + Vite
- content outside React components
- JSON for structured entities/exercises/maps
- Markdown only where longer theory is genuinely useful
- image assets referenced from content entities
- localStorage behind `ProgressRepository`
- content validation before build/deploy
- GitHub Actions + GitHub Pages

Adding learning content should normally mean adding/editing content files, not changing React code.

## Immediate next step when Krížom-krážom A1/A2 files are available

1. Analyze both books.
2. Analyze vocabulary lists and structure.
3. Compare vocabulary with official A1/A2 requirements.
4. Complete Vocabulary Content Map.
5. Analyze grammar progression.
6. Compare it with official A1/A2 grammar standard.
7. Complete Grammar Content Map.
8. Confirm first 5 Vocabulary topics.
9. Confirm first 5 Grammar topics.
10. Build complete vertical slices before mass generation.

## Copyright/content policy

Reference sources may define scope, progression, mechanics and difficulty. Published learning content must be original and must not reproduce copyrighted textbook exercises or official sample tests verbatim.