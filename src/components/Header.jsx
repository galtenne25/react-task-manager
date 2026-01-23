import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const Header = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const trimmedText = text.trim();

    // Validate input locally
    if (!trimmedText) {
      setError('Please enter a task description');
      return;
    }

    // Add validated task
    onAdd(trimmedText);
    setText('');
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
    // Clear error when user starts typing
    if (error) setError('');
  };

  // Custom SVG Logo Component
  const LogoIcon = () => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="logo-icon"
    >
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Rounded Square Background */}
      <rect
        x="2"
        y="2"
        width="36"
        height="36"
        rx="10"
        fill="url(#logoGradient)"
      />

      {/* Checkmark Path */}
      <path
        d="M12 20L17 25L28 14"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );

  return (
    <header className="header">
      {/* Brand Section */}
      <div className="brand-section">
        <LogoIcon />
        <h1 className="brand-title">Task Manager</h1>
      </div>

      {/* Input & Button Form */}
      <form onSubmit={handleSubmit} className="header-form">
        <input
          type="text"
          placeholder="Add a new task..."
          value={text}
          onChange={handleInputChange}
          className="input-field"
          aria-label="New task description"
        />
        <button type="submit" className="add-btn" aria-label="Add new task">
          Add
        </button>
      </form>

      {/* Error Message */}
      {error && (
        <div className="error-message" role="alert" aria-live="polite">
          {error}
        </div>
      )}
    </header>
  );
};

export default Header;