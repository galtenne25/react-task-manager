import React, { useRef, useEffect } from 'react';
import { autoAnimate } from '@formkit/auto-animate';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, toggleTask, deleteTask, editTask }) => {
  const ulRef = useRef(null);

  // Enable auto-animate on the list
  useEffect(() => {
    if (ulRef.current) {
      autoAnimate(ulRef.current);
    }
  }, []);

  if (tasks.length === 0) {
    return <div style={{ padding: '20px', textAlign: 'center', color: '#999' }}>No tasks yet. Add one above!</div>;
  }

  return (
    <ul ref={ulRef} style={{ listStyle: 'none', padding: '0' }} className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;