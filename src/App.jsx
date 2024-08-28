import React, { useState } from 'react';
import InputField from './components/InputField/InputField';
import ResultMessage from './components/ResultMessage/ResultMessage';
import SubmitButton from './components/SubmitButton/SubmitButton';
import Counter from './components/Counter/Counter';
import MultiplicationProblem from './components/MultiplicationProblem/MultiplicationProblem';

import "./App.css";

const App = () => {
  const [factor1, setFactor1] = useState(Math.floor(Math.random() * 10) + 1);
  const [factor2, setFactor2] = useState(Math.floor(Math.random() * 10) + 1);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [score, setScore] = useState(0);
  const [error, setError] = useState('');
  const totalAttempts = 10;

  const checkAnswer = () => {
    // Зупиняємо гру, якщо кількість спроб досягла ліміту
    if (attempts >= totalAttempts) {
      return;
    }

    // Перевірка на порожнє поле
    if (!userAnswer.trim()) {
      setError('Потрібно вказати відповідь!');
      return;
    }

    // Перевірка, чи відповідь є числом
    if (isNaN(userAnswer)) {
      setError('Введіть тільки цифри!');
      return;
    }

    setError(''); // Очищення повідомлення про помилку

    const correctAnswer = factor1 * factor2;
    if (parseInt(userAnswer) === correctAnswer) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    setAttempts(attempts + 1);
    setUserAnswer('');

    // Оновлення факторів, якщо ще є спроби
    if (attempts + 1 < totalAttempts) {
      setFactor1(Math.floor(Math.random() * 10) + 1);
      setFactor2(Math.floor(Math.random() * 10) + 1);
    }
  };

  const startNewGame = () => {
    setFactor1(Math.floor(Math.random() * 10) + 1);
    setFactor2(Math.floor(Math.random() * 10) + 1);
    setUserAnswer('');
    setIsCorrect(null);
    setAttempts(0);
    setScore(0);
    setError('');
  };

  return (
    <div>
      <Counter current={Math.min(attempts + 1, totalAttempts)} total={totalAttempts} />
      {attempts < totalAttempts && (
        <>
          <MultiplicationProblem factor1={factor1} factor2={factor2} />
          <InputField
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Введіть відповідь"
          />
          <SubmitButton onClick={checkAnswer} />
          {error && <div style={{ color: 'red', marginTop: '8px' }}>{error}</div>}
          <ResultMessage isCorrect={isCorrect} />
        </>
      )}
      {attempts >= totalAttempts && (
        <div>
          <p>Гра завершена! Твій результат: {score} з {totalAttempts}</p>
          <button onClick={startNewGame}>Почати нову гру</button>
        </div>
      )}
    </div>
  );
};

export default App;
