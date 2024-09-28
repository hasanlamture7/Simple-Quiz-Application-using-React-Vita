import React, { useState, useEffect } from 'react';
import Question from './Question';
import NavigationButtons from './NavigationButtons';
import ScoreDisplay from './ScoreDisplay';

function QuizContainer() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
      if (!response.ok) {
        throw new Error('Failed to fetch questions');
      }
      const data = await response.json();
      const formattedQuestions = data.results.map(q => ({
        text: q.question,
        options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
        correctAnswer: q.correct_answer
      }));
      setQuestions(formattedQuestions);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleAnswerSelect = (answer) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newUserAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (question.correctAnswer === userAnswers[index]) {
        score++;
      }
    });
    return score;
  };

  if (loading) {
    return <div>Loading questions...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (quizCompleted) {
    return <ScoreDisplay score={calculateScore()} total={questions.length} />;
  }

  return (
    <div className="quiz-container">
      <Question
        question={questions[currentQuestionIndex]}
        selectedAnswer={userAnswers[currentQuestionIndex]}
        onAnswerSelect={handleAnswerSelect}
      />
      <NavigationButtons
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        onNextQuestion={handleNextQuestion}
        onPreviousQuestion={handlePreviousQuestion}
      />
    </div>
  );
}

export default QuizContainer;