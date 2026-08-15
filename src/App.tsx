import { useMemo, useState } from 'react';
import { ui, type UiLanguage } from './i18n';

import pastTenseTopic from '../content/grammar/a2/past-tense/topic.json';
import pastTenseExercises from '../content/grammar/a2/past-tense/exercises.json';
import bytTable from '../content/grammar-reference/a1/verbs/byt-present/table.json';
import istException from '../content/grammar-reference/a2/exceptions/ist-irregular-past/exception.json';
import istExercises from '../content/grammar-reference/a2/exceptions/ist-irregular-past/exercises.json';
import reading from '../content/exam-skills/a2/reading/topic.json';
import listening from '../content/exam-skills/a2/listening/topic.json';
import languageUse from '../content/exam-skills/a2/language-use/topic.json';
import writing from '../content/exam-skills/a2/writing/topic.json';
import speaking from '../content/exam-skills/a2/speaking/topic.json';

type Page = 'home' | 'learn' | 'grammar' | 'practice' | 'exam' | 'progress';

type Localized = { sk: string; uk: string };

type ChoiceExercise = {
  id: string;
  question: string;
  options?: string[];
  correctAnswer?: string | boolean;
  explanation?: Localized;
  difficulty?: string;
};

const examAreas = [reading, listening, languageUse, writing, speaking];

const icons: Record<string, string> = {
  'exam-reading': '📖',
  'exam-listening': '🎧',
  'exam-language-use': '🧩',
  'exam-writing': '✍️',
  'exam-speaking': '💬'
};

function App() {
  const [language, setLanguage] = useState<UiLanguage>('uk');
  const [page, setPage] = useState<Page>('home');
  const t = ui[language];

  const nav: Array<{ id: Page; label: string; icon: string }> = [
    { id: 'home', label: t.home, icon: '⌂' },
    { id: 'learn', label: t.learn, icon: '▤' },
    { id: 'grammar', label: t.grammar, icon: '▦' },
    { id: 'practice', label: t.practice, icon: '✓' },
    { id: 'exam', label: t.exam, icon: '◎' },
    { id: 'progress', label: t.progress, icon: '↗' }
  ];

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <button className="brand" onClick={() => setPage('home')}>
          <span className="brand-mark">SK</span>
          <span>
            <strong>{t.brand}</strong>
            <small>{t.subtitle}</small>
          </span>
        </button>

        <nav className="nav-list">
          {nav.map((item) => (
            <button
              key={item.id}
              className={page === item.id ? 'nav-item active' : 'nav-item'}
              onClick={() => setPage(item.id)}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="sidebar-note">
          <div className="level-pill">A2</div>
          <strong>{language === 'uk' ? 'Мета: скласти A2' : 'Cieľ: zvládnuť A2'}</strong>
          <div className="mini-progress"><span style={{ width: '24%' }} /></div>
          <small>24%</small>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="breadcrumb">A1 → A2 · {t.subtitle}</div>
          <div className="language-switch">
            <button className={language === 'sk' ? 'selected' : ''} onClick={() => setLanguage('sk')}>SK</button>
            <button className={language === 'uk' ? 'selected' : ''} onClick={() => setLanguage('uk')}>UA</button>
          </div>
        </header>

        {page === 'home' && <Home language={language} onNavigate={setPage} />}
        {page === 'learn' && <Learn language={language} onPractice={() => setPage('practice')} />}
        {page === 'grammar' && <GrammarReference language={language} />}
        {page === 'practice' && <Practice language={language} />}
        {page === 'exam' && <Exam language={language} />}
        {page === 'progress' && <Progress language={language} />}
      </main>
    </div>
  );
}

function Home({ language, onNavigate }: { language: UiLanguage; onNavigate: (page: Page) => void }) {
  const t = ui[language];
  return (
    <div className="page-content">
      <section className="hero">
        <div>
          <span className="eyebrow">SLOVENČINA · A2</span>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroText}</p>
          <div className="hero-actions">
            <button className="primary" onClick={() => onNavigate('learn')}>{t.continue}</button>
            <button className="secondary" onClick={() => onNavigate('exam')}>{t.exam}</button>
          </div>
        </div>
        <div className="hero-score">
          <span>{language === 'uk' ? 'Готовність' : 'Pripravenosť'}</span>
          <strong>24%</strong>
          <div className="ring"><div>24</div></div>
          <small>{language === 'uk' ? 'Початковий етап' : 'Začiatočná fáza'}</small>
        </div>
      </section>

      <section>
        <div className="section-heading">
          <div><span className="eyebrow">EXAM MAP</span><h2>{t.examAreas}</h2></div>
          <button className="text-button" onClick={() => onNavigate('exam')}>{t.start} →</button>
        </div>
        <div className="exam-grid">
          {examAreas.map((area) => (
            <button className="exam-card" key={area.id} onClick={() => onNavigate('exam')}>
              <span className="exam-icon">{icons[area.id]}</span>
              <span className="level-tag">A2</span>
              <h3>{area.title[language]}</h3>
              <p>{area.description[language]}</p>
            </button>
          ))}
        </div>
      </section>

      <div className="dashboard-grid">
        <section className="panel">
          <span className="eyebrow">NEXT</span>
          <h2>{t.currentTopic}</h2>
          <div className="topic-row">
            <div className="topic-number">10</div>
            <div><strong>{pastTenseTopic.title[language]}</strong><p>{pastTenseTopic.description[language]}</p></div>
          </div>
          <button className="primary full" onClick={() => onNavigate('learn')}>{t.continue}</button>
        </section>
        <section className="panel soft">
          <span className="eyebrow">REFERENCE</span>
          <h2>{t.grammarReference}</h2>
          <p>{language === 'uk' ? 'Особи, дієслова, відмінки, прийменники та винятки — у структурованих таблицях.' : 'Osoby, slovesá, pády, predložky a výnimky v prehľadných tabuľkách.'}</p>
          <button className="secondary full" onClick={() => onNavigate('grammar')}>{t.tables} →</button>
        </section>
      </div>
    </div>
  );
}

function Learn({ language, onPractice }: { language: UiLanguage; onPractice: () => void }) {
  return (
    <div className="page-content narrow">
      <span className="eyebrow">A2 · GRAMMAR</span>
      <h1>{pastTenseTopic.title[language]}</h1>
      <p className="lead">{pastTenseTopic.description[language]}</p>

      <section className="lesson-card">
        <h2>{language === 'uk' ? 'Як будується минулий час' : 'Ako tvoríme minulý čas'}</h2>
        <p>{language === 'uk' ? 'Для першої та другої особи використовуємо форму минулого часу разом із som, si, sme, ste. У третій особі допоміжні je/sú не додаються.' : 'V prvej a druhej osobe používame minulé príčastie spolu s tvarmi som, si, sme, ste. V tretej osobe sa pomocné je/sú nepoužíva.'}</p>
        <div className="example-box">
          <span>ja</span><strong>som pracoval / pracovala</strong>
          <span>ona</span><strong>pracovala</strong>
          <span>oni</span><strong>pracovali</strong>
        </div>
      </section>

      <section className="exception-banner">
        <div className="warning-icon">!</div>
        <div>
          <span className="eyebrow">{ui[language].exception}</span>
          <h3>{istException.title[language]}</h3>
          <p>{istException.explanation[language]}</p>
          <div className="form-chips">{istException.forms.map((form) => <span key={form}>{form}</span>)}</div>
        </div>
      </section>

      <button className="primary" onClick={onPractice}>{language === 'uk' ? 'Перейти до вправ' : 'Prejsť na cvičenia'} →</button>
    </div>
  );
}

function GrammarReference({ language }: { language: UiLanguage }) {
  const t = ui[language];
  return (
    <div className="page-content">
      <span className="eyebrow">GRAMMAR REFERENCE</span>
      <h1>{t.grammarReference}</h1>
      <p className="lead">{language === 'uk' ? 'Короткі таблиці для швидкого повторення перед вправами та іспитом.' : 'Krátke tabuľky na rýchle opakovanie pred cvičením a skúškou.'}</p>

      <section className="reference-layout">
        <div className="reference-menu panel">
          <button className="reference-link active">Slovesá <span>›</span></button>
          <button className="reference-link">Časy <span>›</span></button>
          <button className="reference-link">Pády <span>›</span></button>
          <button className="reference-link">Zámená <span>›</span></button>
          <button className="reference-link">Predložky <span>›</span></button>
          <button className="reference-link">Výnimky <span>›</span></button>
        </div>

        <div className="panel table-panel">
          <div className="table-heading">
            <div><span className="level-tag">{bytTable.level}</span><h2>{bytTable.title[language]}</h2><p>{bytTable.description[language]}</p></div>
            <span className="bookmark">☆</span>
          </div>
          <div className="grammar-table-wrap">
            <table className="grammar-table">
              <thead><tr>{bytTable.columns.map((column) => <th key={column.id}>{column.label[language]}</th>)}</tr></thead>
              <tbody>{bytTable.rows.map((row) => <tr key={row.person}><td>{humanPerson(row.person)}</td><td className="pronoun">{row.pronoun}</td><td className="form-cell">{row.form}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="exception-banner">
        <div className="warning-icon">!</div>
        <div><span className="eyebrow">{t.exception}</span><h3>{istException.title[language]}</h3><p>{istException.explanation[language]}</p><div className="form-chips">{istException.forms.map((form) => <span key={form}>{form}</span>)}</div></div>
      </section>
    </div>
  );
}

function Practice({ language }: { language: UiLanguage }) {
  const exercises = useMemo(() => [...pastTenseExercises, ...istExercises] as ChoiceExercise[], []);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const exercise = exercises[index];
  const options = exercise.options ?? [];
  const isCorrect = selected !== null && String(exercise.correctAnswer) === selected;

  function choose(value: string) { setSelected(value); }
  function next() { setIndex((current) => (current + 1) % exercises.length); setSelected(null); }

  return (
    <div className="page-content narrow">
      <div className="practice-header">
        <div><span className="eyebrow">VISUAL PRACTICE</span><h1>{ui[language].selectAnswer}</h1></div>
        <span className="counter">{index + 1} / {exercises.length}</span>
      </div>
      <div className="practice-progress"><span style={{ width: `${((index + 1) / exercises.length) * 100}%` }} /></div>

      <section className="exercise-card">
        <div className="exercise-meta"><span className="level-tag">A2</span><span>{exercise.difficulty ?? 'practice'}</span></div>
        <h2>{exercise.question}</h2>
        <div className="choices">
          {options.map((option, optionIndex) => {
            const chosen = selected === option;
            const correct = selected !== null && String(exercise.correctAnswer) === option;
            return <button key={option} onClick={() => choose(option)} className={`choice ${chosen ? 'chosen' : ''} ${correct ? 'correct' : ''}`}><span>{String.fromCharCode(65 + optionIndex)}</span>{option}</button>;
          })}
        </div>

        {selected !== null && (
          <div className={isCorrect ? 'feedback success' : 'feedback error'}>
            <strong>{isCorrect ? ui[language].correct : ui[language].incorrect}</strong>
            {exercise.explanation && <p>{exercise.explanation[language]}</p>}
          </div>
        )}
        <button className="primary full" onClick={next}>{language === 'uk' ? 'Наступне завдання' : 'Ďalšia úloha'} →</button>
      </section>
    </div>
  );
}

function Exam({ language }: { language: UiLanguage }) {
  return (
    <div className="page-content">
      <span className="eyebrow">A2 EXAM</span>
      <h1>{ui[language].examAreas}</h1>
      <p className="lead">{ui[language].examHint}</p>
      <div className="exam-grid large">
        {examAreas.map((area, index) => (
          <article className="exam-card static" key={area.id}>
            <div className="card-top"><span className="exam-icon">{icons[area.id]}</span><span className="number-badge">0{index + 1}</span></div>
            <span className="level-tag">A2</span>
            <h2>{area.title[language]}</h2>
            <p>{area.description[language]}</p>
            <button className={index < 3 ? 'primary full' : 'secondary full'}>{index < 3 ? ui[language].start : ui[language].comingSoon}</button>
          </article>
        ))}
      </div>
    </div>
  );
}

function Progress({ language }: { language: UiLanguage }) {
  const items = [
    { label: language === 'uk' ? 'Минулий час' : 'Minulý čas', value: 72 },
    { label: language === 'uk' ? 'Дієслово byť' : 'Sloveso byť', value: 88 },
    { label: language === 'uk' ? 'Винятки — дієслова' : 'Výnimky — slovesá', value: 45 }
  ];
  return (
    <div className="page-content">
      <span className="eyebrow">PROGRESS</span>
      <h1>{ui[language].yourProgress}</h1>
      <div className="stats-grid">
        <div className="stat"><span>{ui[language].completed}</span><strong>3</strong><small>{language === 'uk' ? 'теми' : 'témy'}</small></div>
        <div className="stat"><span>{language === 'uk' ? 'Правильні відповіді' : 'Správne odpovede'}</span><strong>74%</strong><small>42 / 57</small></div>
        <div className="stat"><span>{ui[language].weakAreas}</span><strong>2</strong><small>{language === 'uk' ? 'для повторення' : 'na opakovanie'}</small></div>
      </div>
      <section className="panel">
        <h2>{language === 'uk' ? 'Прогрес за темами' : 'Pokrok podľa tém'}</h2>
        <div className="topic-progress-list">{items.map((item) => <div className="topic-progress" key={item.label}><div><strong>{item.label}</strong><span>{item.value}%</span></div><div className="bar"><span style={{ width: `${item.value}%` }} /></div></div>)}</div>
      </section>
    </div>
  );
}

function humanPerson(value: string) {
  const map: Record<string, string> = { '1sg': '1. os. j. č.', '2sg': '2. os. j. č.', '3sg': '3. os. j. č.', '1pl': '1. os. mn. č.', '2pl': '2. os. mn. č.', '3pl': '3. os. mn. č.' };
  return map[value] ?? value;
}

export default App;
