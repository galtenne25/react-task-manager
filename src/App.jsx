import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('tasks');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Failed to parse tasks from localStorage:', error);
      return [];
    }
  });
  const [filter, setFilter] = useState('all');
  const [showConfetti, setShowConfetti] = useState(false);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Calculate progress and trigger confetti
  useEffect(() => {
    if (tasks.length > 0) {
      const completedCount = tasks.filter((task) => task.completed).length;
      const progressPercentage = (completedCount / tasks.length) * 100;
      
      if (progressPercentage === 100) {
        setShowConfetti(true);
        // Auto-hide confetti after 3 seconds
        const timer = setTimeout(() => setShowConfetti(false), 3000);
        return () => clearTimeout(timer);
      } else {
        setShowConfetti(false);
      }
    } else {
      setShowConfetti(false);
    }
  }, [tasks]);

  const addTask = (text) => {
    // Text is pre-validated in Header component
    const newTask = {
      id: Date.now() + Math.random().toString(36).substr(2, 9),
      text: text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  // Filter tasks based on current filter state
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all'
  });

  // Count active (incomplete) tasks
  const activeCount = tasks.filter((task) => !task.completed).length;
  const completedCount = tasks.length - activeCount;
  const progressPercentage = tasks.length > 0 ? (completedCount / tasks.length) * 100 : 0;

  return (
    <div>
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
      <div className="app-container">
        <Header 
          onAdd={addTask}
          progress={progressPercentage}
          completedCount={completedCount}
          totalCount={tasks.length}
        />
        <TodoList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} />
        <Footer
          activeCount={activeCount}
          filter={filter}
          setFilter={setFilter}
          onClearCompleted={clearCompleted}
        />
      </div>
      <footer className="copyright-notice">
        All rights reserved to Gal Tenne © 2026
      </footer>
    </div>
  );
};

export default App;