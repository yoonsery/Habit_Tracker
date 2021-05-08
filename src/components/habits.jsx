import React from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

const Habits = ({
  habits,
  onIncrement,
  onDecrement,
  onDelete,
  onAdd,
  onReset,
}) => {
  return (
    <>
      <HabitAddForm onAdd={onAdd} />
      <ul>
        {habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <button className="habits-reset" onClick={onReset}>
        Reset All
      </button>
    </>
  );
};

export default Habits;

// class Habits extends Component {
//   render() {
//     return (
//       <>
//         <HabitAddForm onAdd={this.props.onAdd} />
//         <ul>
//           {this.props.habits.map((habit) => (
//             <Habit
//               key={habit.id}
//               habit={habit}
//               onIncrement={this.props.onIncrement}
//               onDecrement={this.props.onDecrement}
//               onDelete={this.props.onDelete}
//             />
//           ))}
//         </ul>
//         <button className="habits-reset" onClick={this.props.onReset}>
//           Reset All
//         </button>
//       </>
//     );
//   }
// }
