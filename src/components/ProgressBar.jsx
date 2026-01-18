import React from 'react';

const ProgressBar = ({ progress, completedCount, totalCount }) => {
  // Get motivational message based on progress
  const getMotivationalMessage = () => {
    if (progress === 0) return 'Start by adding a task!';
    if (progress < 25) return 'You\'ve got this! 💪';
    if (progress < 50) return 'Great start! Keep going 🚀';
    if (progress < 75) return 'Halfway there! 🎯';
    if (progress < 100) return 'Almost done! Just a few more 🔥';
    return 'Perfect! All done! 🎉';
  };

  return (
    <div className="progress-container">
      <div className="progress-header">
        <span className="progress-text">{Math.round(progress)}% Complete</span>
        <span className="progress-count">{completedCount} of {totalCount}</span>
      </div>
      
      {/* Progress Bar Track */}
      <div className="progress-track">
        <div 
          className="progress-fill" 
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Motivational Message */}
      <div className="progress-message">
        {getMotivationalMessage()}
      </div>
    </div>
  );
};

export default ProgressBar;
