import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';

describe('Header Component', () => {
  it('should render the input field and add button', () => {
    const mockOnAdd = vi.fn();
    render(<Header onAdd={mockOnAdd} />);
    
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should update the input value when typing', async () => {
    const mockOnAdd = vi.fn();
    render(<Header onAdd={mockOnAdd} />);
    
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'Buy groceries');
    
    expect(input.value).toBe('Buy groceries');
  });

  it('should call onAdd with the input value when form is submitted', async () => {
    const mockOnAdd = vi.fn();
    render(<Header onAdd={mockOnAdd} />);
    
    const input = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', { name: /add/i });
    
    await userEvent.type(input, 'Learn React');
    fireEvent.click(addButton);
    
    expect(mockOnAdd).toHaveBeenCalledWith('Learn React');
    expect(mockOnAdd).toHaveBeenCalledTimes(1);
  });

  it('should clear the input after successful submission', async () => {
    const mockOnAdd = vi.fn();
    render(<Header onAdd={mockOnAdd} />);
    
    const input = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', { name: /add/i });
    
    await userEvent.type(input, 'New task');
    fireEvent.click(addButton);
    
    expect(input.value).toBe('');
  });

  it('should not call onAdd if input is empty', async () => {
    const mockOnAdd = vi.fn();
    render(<Header onAdd={mockOnAdd} />);
    
    const addButton = screen.getByRole('button', { name: /add/i });
    fireEvent.click(addButton);
    
    expect(mockOnAdd).not.toHaveBeenCalled();
  });
});
