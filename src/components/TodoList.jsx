import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, toggleTask, deleteTask, editTask }) => {
  if (tasks.length === 0) {
    return <div style={{ padding: '20px', textAlign: 'center', color: '#999' }}>No tasks yet. Add one above!</div>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: '0' }}>
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