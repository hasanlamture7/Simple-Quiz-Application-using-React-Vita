import React from "react";
import "../App.css";

const TotalQuestions = ({ questions, userAnswers, currentIndex, onJump }) => {
  const getStatus = (index) => {
    if (index === currentIndex) return "current";
    if (!userAnswers[index]) return "notVisited";
    return "answered";
  };

  return (
    <div className="question-palette-container">
      <h4>Question Palette:</h4>
      <div className="palette-grid">
        {questions.map((_, index) => (
          <button
            key={index}
            className={`palette-button ${getStatus(index)}`}
            onClick={() => onJump(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="palette-legend">
        <span><span className="circle answered" /> Answered</span>
        <span><span className="circle notVisited" /> Not Visited</span>
        <span><span className="circle current" /> Current</span>
      </div>
    </div>
  );
};

export default TotalQuestions;
