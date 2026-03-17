import React, { useState, useEffect, useCallback } from 'react';
import './aboutgame.css';
import { gameQuestions, gameConfig } from '../../Data';

const { TIMER, XP_CORRECT, XP_STREAK, ROUNDS } = gameConfig;

const pickRandom = (arr, n) => {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
};

const AboutGame = () => {
  const [screen, setScreen] = useState('start');
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [xp, setXp] = useState(0);
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(TIMER);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [shakeCard, setShakeCard] = useState(false);
  const [answers, setAnswers] = useState([]);

  const q = questions[current] || {};
  const progress = questions.length ? (current / questions.length) * 100 : 0;
  const timerPct = (timeLeft / TIMER) * 100;

  useEffect(() => {
    if (screen !== 'play' || selected !== null) return;

    if (timeLeft <= 0) {
      handleAnswer(-1);
      return;
    }

    const t = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, screen, selected]);

  const handleAnswer = useCallback(
    (idx) => {
      if (selected !== null) return;

      setSelected(idx);
      const correct = idx === q.answer;

      if (correct) {
        setScore((s) => s + 1);

        setStreak((s) => {
          const newStreak = s + 1;
          setMaxStreak((m) => Math.max(m, newStreak));
          return newStreak;
        });

        const bonus = streak >= 2 ? XP_STREAK * streak : 0;
        setXp((x) => x + XP_CORRECT + bonus);

        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 800);
      } else {
        setStreak(0);
        setShakeCard(true);
        setTimeout(() => setShakeCard(false), 500);
      }

      setAnswers((a) => [...a, { qIdx: current, picked: idx, correct }]);

      setTimeout(() => {
        if (current + 1 < questions.length) {
          setCurrent((c) => c + 1);
          setSelected(null);
          setTimeLeft(TIMER);
        } else {
          setScreen('result');
        }
      }, 1000);
    },
    [selected, q, current, streak, questions.length]
  );

  const startGame = () => {
    const picked = pickRandom(gameQuestions, ROUNDS);
    setQuestions(picked);
    setCurrent(0);
    setScore(0);
    setXp(0);
    setSelected(null);
    setTimeLeft(TIMER);
    setStreak(0);
    setMaxStreak(0);
    setAnswers([]);
    setShowConfetti(false);
    setShakeCard(false);
    setScreen('play');
  };

  const getResultData = () => {
    const pct = (score / ROUNDS) * 100;

    if (pct === 100) {
      return {
        emoji: '🏆',
        title: 'LEGENDARY!',
        sub: 'Absolute travel genius.',
        tier: 'legendary',
        color: '#fbbf24',
      };
    }

    if (pct >= 80) {
      return {
        emoji: '💎',
        title: 'AMAZING!',
        sub: 'You really know your stuff.',
        tier: 'diamond',
        color: '#818cf8',
      };
    }

    if (pct >= 60) {
      return {
        emoji: '🌍',
        title: 'GREAT JOB!',
        sub: 'Solid knowledge!',
        tier: 'gold',
        color: '#4ade80',
      };
    }

    if (pct >= 40) {
      return {
        emoji: '✈️',
        title: 'NOT BAD!',
        sub: 'Room to explore more.',
        tier: 'silver',
        color: '#94a3b8',
      };
    }

    return {
      emoji: '🗺️',
      title: 'KEEP EXPLORING!',
      sub: 'Travel and learn!',
      tier: 'bronze',
      color: '#fb923c',
    };
  };

  return (
    <div className="ag-wrap">
      <div className="ag-particles" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <span key={i} className={`ag-particle ag-p${i + 1}`} />
        ))}
      </div>

      {screen === 'start' && (
        <div className="ag-card ag-start">
          <div className="ag-bg-orbs" aria-hidden="true">
            <div className="ag-orb ag-orb-1" />
            <div className="ag-orb ag-orb-2" />
          </div>

          <span className="ag-chip">🎮 MINI GAME</span>

          <h3 className="ag-hero-title">
            Travel
            <br />
            <span className="ag-neon">Trivia</span>
          </h3>

          <p className="ag-hero-sub">
            Test your world knowledge in {ROUNDS} quick rounds!
          </p>

          <div className="ag-preview-stats">
            <div className="ag-pstat">
              <span className="ag-pstat-val">{ROUNDS}</span>
              <span className="ag-pstat-label">Questions</span>
            </div>

            <div className="ag-pstat-divider" />

            <div className="ag-pstat">
              <span className="ag-pstat-val">{TIMER}s</span>
              <span className="ag-pstat-label">Per Round</span>
            </div>

            <div className="ag-pstat-divider" />

            <div className="ag-pstat">
              <span className="ag-pstat-val">🔥</span>
              <span className="ag-pstat-label">Streaks</span>
            </div>
          </div>

          <button className="ag-btn-play" onClick={startGame}>
            <span className="ag-btn-glow" />
            Start Game
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>

          <p className="ag-hint">Random questions each game 🎲</p>
        </div>
      )}

      {screen === 'play' && (
        <div className={`ag-card ag-play ${shakeCard ? 'ag-shake' : ''}`}>
          {showConfetti && (
            <div className="ag-confetti" aria-hidden="true">
              {[...Array(18)].map((_, i) => (
                <span
                  key={i}
                  className="ag-conf-piece"
                  style={{ '--i': i }}
                />
              ))}
            </div>
          )}

          <div className="ag-play-top">
            <div className="ag-round-pill">
              <span className="ag-round-num">{current + 1}</span>
              <span className="ag-round-of">/ {questions.length}</span>
            </div>

            {streak >= 2 && <span className="ag-streak-badge">🔥 {streak}x</span>}

            {q.diff && (
              <span className={`ag-diff ag-diff-${q.diff}`}>
                {q.diff === 'easy' ? '🟢' : q.diff === 'medium' ? '🟡' : '🔴'}{' '}
                {q.diff}
              </span>
            )}

            <div className={`ag-timer-circle ${timeLeft <= 3 ? 'ag-timer-crit' : ''}`}>
              <svg viewBox="0 0 36 36" className="ag-timer-svg">
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="3"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke={timeLeft <= 3 ? '#ef4444' : '#a855f7'}
                  strokeWidth="3"
                  strokeDasharray={`${timerPct} 100`}
                  strokeLinecap="round"
                  transform="rotate(-90 18 18)"
                  className="ag-timer-ring"
                />
              </svg>
              <span className="ag-timer-num">{timeLeft}</span>
            </div>
          </div>

          <div className="ag-prog">
            <div className="ag-prog-fill" style={{ width: `${progress}%` }} />
            <div className="ag-prog-glow" style={{ left: `${progress}%` }} />
          </div>

          <div className="ag-xp-row">
            <span className="ag-xp-label">⚡ {xp} XP</span>
            {streak >= 2 && (
              <span className="ag-xp-bonus">+{XP_STREAK * streak} bonus!</span>
            )}
          </div>

          <p className="ag-question">{q.q}</p>

          <div className="ag-options">
            {q.options?.map((opt, i) => {
              let cls = 'ag-opt';

              if (selected !== null) {
                if (i === q.answer) cls += ' ag-opt-correct';
                else if (i === selected && selected !== q.answer) cls += ' ag-opt-wrong';
                else cls += ' ag-opt-dim';
              }

              return (
                <button
                  key={i}
                  className={cls}
                  onClick={() => handleAnswer(i)}
                  disabled={selected !== null}
                >
                  <span className="ag-opt-key">{String.fromCharCode(65 + i)}</span>
                  <span className="ag-opt-text">{opt}</span>

                  {selected !== null && i === q.answer && (
                    <span className="ag-opt-check">✓</span>
                  )}

                  {selected === i && i !== q.answer && (
                    <span className="ag-opt-x">✗</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {screen === 'result' &&
        (() => {
          const r = getResultData();
          const pct = Math.round((score / ROUNDS) * 100);

          return (
            <div className="ag-card ag-result">
              <div
                className="ag-result-glow"
                style={{ '--glow-color': r.color }}
              />

              <div className="ag-result-emoji">{r.emoji}</div>

              <h3 className="ag-result-title" style={{ color: r.color }}>
                {r.title}
              </h3>
              <p className="ag-result-sub">{r.sub}</p>

              <div className="ag-score-ring">
                <svg viewBox="0 0 120 120" className="ag-score-svg">
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="8"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke={r.color}
                    strokeWidth="8"
                    strokeDasharray={`${pct * 3.27} 327`}
                    strokeLinecap="round"
                    transform="rotate(-90 60 60)"
                    className="ag-score-ring-fill"
                  />
                </svg>

                <div className="ag-score-inner">
                  <span className="ag-score-big">{score}</span>
                  <span className="ag-score-slash">/{ROUNDS}</span>
                </div>
              </div>

              <div className="ag-result-stats">
                <div className="ag-rstat">
                  <span className="ag-rstat-val" style={{ color: r.color }}>
                    ⚡ {xp}
                  </span>
                  <span className="ag-rstat-label">Total XP</span>
                </div>

                <div className="ag-rstat">
                  <span className="ag-rstat-val" style={{ color: r.color }}>
                    🔥 {maxStreak}
                  </span>
                  <span className="ag-rstat-label">Best Streak</span>
                </div>

                <div className="ag-rstat">
                  <span className="ag-rstat-val" style={{ color: r.color }}>
                    {pct}%
                  </span>
                  <span className="ag-rstat-label">Accuracy</span>
                </div>
              </div>

              <div className="ag-answer-dots">
                {answers.map((a, i) => (
                  <span
                    key={i}
                    className={`ag-dot ${a.correct ? 'ag-dot-ok' : 'ag-dot-fail'}`}
                  >
                    {a.correct ? '✓' : '✗'}
                  </span>
                ))}
              </div>

              <button className="ag-btn-play ag-btn-again" onClick={startGame}>
                <span className="ag-btn-glow" />
                🔄 Play Again
              </button>
            </div>
          );
        })()}
    </div>
  );
};

export default AboutGame;