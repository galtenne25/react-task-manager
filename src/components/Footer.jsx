import React from 'react';

const Footer = ({ activeCount, filter, setFilter, onClearCompleted }) => {
  const filters = ['all', 'active', 'completed'];

  return (
    <div style={{ padding: '20px', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ color: '#666' }}>{activeCount} items left</span>
      <div style={{ display: 'flex', gap: '10px' }}>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: '5px 10px',
              backgroundColor: filter === f ? '#333' : '#f0f0f0',
              color: filter === f ? 'white' : '#333',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              textTransform: 'capitalize'
            }}
          >
            {f}
          </button>
        ))}
      </div>
      <button
        onClick={onClearCompleted}
        style={{
          padding: '5px 10px',
          backgroundColor: '#ff6b6b',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default Footer;