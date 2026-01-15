import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('TodoItem Component', () => {
  const mockTask = {
    id: 1,
    text: 'Test task',
    completed: false,
  };

  const mockToggleTask = vi.fn();
  const mockDeleteTask = vi.fn();
  const mockEditTask = vi.fn();

  it('should render the task text correctly', () => {
    render(
      <TodoItem
        task={mockTask}
        toggleTask={mockToggleTask}
        deleteTask={mockDeleteTask}
        editTask={mockEditTask}
      />
    );

    expect(screen.getByText('Test task')).toBeInTheDocument();
  });

  it('should render checkbox with correct initial state', () => {
    render(
      <TodoItem
        task={mockTask}
        toggleTask={mockToggleTask}
        deleteTask={mockDeleteTask}
        editTask={mockEditTask}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.checked).toBe(false);
  });

  it('should call deleteTask when Delete button is clicked', () => {
    render(
      <TodoItem
        task={mockTask}
        toggleTask={mockToggleTask}
        deleteTask={mockDeleteTask}
        editTask={mockEditTask}
      />
    );

    const deleteButton = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);

    expect(mockDeleteTask).toHaveBeenCalledWith(1);
    expect(mockDeleteTask).toHaveBeenCalledTimes(1);
  });

  it('should call toggleTask when checkbox is clicked', () => {
    render(
      <TodoItem
        task={mockTask}
        toggleTask={mockToggleTask}
        deleteTask={mockDeleteTask}
        editTask={mockEditTask}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(mockToggleTask).toHaveBeenCalledWith(1);
    expect(mockToggleTask).toHaveBeenCalledTimes(1);
  });

  it('should display Edit button in view mode', () => {
    render(
      <TodoItem
        task={mockTask}
        toggleTask={mockToggleTask}
        deleteTask={mockDeleteTask}
        editTask={mockEditTask}
      />
    );

    const editButton = screen.getByRole('button', { name: /edit/i });
    expect(editButton).toBeInTheDocument();
  });

  it('should render task text with strikethrough and muted color when completed', () => {
    const completedTask = { ...mockTask, completed: true };

    const { container } = render(
      <TodoItem
        task={completedTask}
        toggleTask={mockToggleTask}
        deleteTask={mockDeleteTask}
        editTask={mockEditTask}
      />
    );

    const span = container.querySelector('span');
    expect(span).toHaveStyle('text-decoration: line-through');
    expect(span).toHaveStyle('color: #888');
  });
});
