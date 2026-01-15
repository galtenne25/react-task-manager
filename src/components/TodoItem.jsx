import React, { useState } from 'react';

const TodoItem = ({ task, toggleTask, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    const trimmedText = editText.trim();
    if (trimmedText) {
      editTask(task.id, trimmedText);
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setEditText(task.text);
    }
  };

  if (isEditing) {
    return (
      <li style={{ padding: '10px', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          style={{ marginRight: '10px', cursor: 'pointer' }}
          disabled
        />
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          style={{
            flex: 1,
            padding: '5px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '16px'
          }}
        />
        <button
          onClick={handleSave}
          style={{
            padding: '5px 10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Save
        </button>
        <button
          onClick={() => {
            setIsEditing(false);
            setEditText(task.text);
          }}
          style={{
            padding: '5px 10px',
            backgroundColor: '#999',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Cancel
        </button>
      </li>
    );
  }

  return (
    <li style={{ padding: '10px', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        style={{ marginRight: '10px', cursor: 'pointer' }}
      />
      <span
        style={{
          flex: 1,
          textDecoration: task.completed ? 'line-through' : 'none',
          color: task.completed ? '#888' : '#000'
        }}
      >
        {task.text}
      </span>
      <button
        onClick={() => setIsEditing(true)}
        style={{
          padding: '5px 10px',
          backgroundColor: '#2196F3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginRight: '5px'
        }}
      >
        Edit
      </button>
      <button
        onClick={() => deleteTask(task.id)}
        style={{
          padding: '5px 10px',
          backgroundColor: '#ff4444',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;