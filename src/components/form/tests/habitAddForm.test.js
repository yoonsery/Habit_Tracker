import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HabitAddForm from '../habitAddForm';
import renderer from 'react-test-renderer';

describe('HabitAddForm', () => {
  it('renders', () => {
    const component = renderer.create(<HabitAddForm onAdd={jest.fn()} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('Form Submit', () => {
    let onAdd;
    let input;
    let button;

    beforeEach(() => {
      onAdd = jest.fn();
      render(<HabitAddForm onAdd={onAdd} />);
      input = screen.getByPlaceholderText('new habit');
      button = screen.getByText('Add');
    });

    it('calls onAdd when button is clicked and valid habit is entered', () => {
      userEvent.type(input, 'New Habit 🎨');
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledWith('New Habit 🎨');
    });

    it('does not call onAdd when the habit is empty', () => {
      userEvent.type(input, '');
      userEvent.click(button);
      expect(onAdd).toBeCalledTimes(0);
    });
  });
});
