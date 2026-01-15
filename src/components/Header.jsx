import React, { useState } from 'react';

const Header = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      onAdd(text);
      setText('');
    }
  };

  return (
    <header className="header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="add-btn">Add</button>
      </form>
    </header>
  );
};

export default Header;