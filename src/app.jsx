import React, { useCallback, useState } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

const App = (props) => {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Reading', count: 0 },
    { id: 2, name: 'Coding', count: 0 },
    { id: 3, name: 'Walking', count: 0 },
  ]);

  const handleIncrement = useCallback((habit) => {
    setHabits((habits) =>
      habits.map((item) => {
        if (item.id === habit.id) {
          return { ...habit, count: habit.count + 1 };
        }
        return item;
      })
    );
  }, []);

  const handleDecrement = useCallback((habit) => {
    setHabits((habits) =>
      habits.map((item) => {
        if (item.id === habit.id) {
          const count = habit.count - 1;
          return { ...habit, count: count < 0 ? 0 : count };
        }
        return item;
      })
    );
  }, []);

  const handleDelete = useCallback((habit) => {
    setHabits((habits) => habits.filter((item) => item.id !== habit.id));
  }, []);

  const handleAdd = useCallback((name) => {
    setHabits((habits) => [...habits, { id: Date.now(), name, count: 0 }]);
  }, []);

  const handleReset = useCallback(() => {
    setHabits((habits) =>
      habits.map((habit) => {
        if (habit.count !== 0) {
          return { ...habit, count: 0 };
        }
        return habit;
      })
    );
  }, []);

  return (
    <>
      <Navbar totalCount={habits.filter((item) => item.count > 0).length} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}
      />
    </>
  );
};

export default App;

// class App extends Component {
// state = {
//   habits: [
//     { id: 1, name: 'Reading', count: 0 },
//     { id: 2, name: 'Coding', count: 0 },
//     { id: 3, name: 'Walking', count: 0 },
//   ],
// };

// handleIncrement = (habit) => {
//   const habits = this.state.habits.map((item) => {
//     if (item.id === habit.id) {
//       return { ...habit, count: habit.count + 1 };
//     }
//     return item;
//   });
//   this.setState({ habits });
// };

// handleDecrement = (habit) => {
//   const habits = this.state.habits.map((item) => {
//     if (item.id === habit.id) {
//       const count = habit.count - 1;
//       return { ...habit, count: count < 0 ? 0 : count };
//     }
//     return item;
//   });
//   this.setState({ habits });
// };

// handleDelete = (habit) => {
//   // this.state.habits.filter no array
//   const habits = this.state.habits.filter((item) => item.id !== habit.id);

//   this.setState({ habits });
// };

// handleAdd = (name) => {
//   const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
//   this.setState({ habits });
// };

// handleReset = () => {
//   const habits = this.state.habits.map((habit) => {
//     if (habit.count !== 0) {
//       return { ...habit, count: 0 };
//     }
//     return habit;
//   });
//   this.setState({ habits });
// };
// render() {
// return (
//   <>
//     <Navbar
//       totalCount={this.state.habits.filter((item) => item.count > 0).length}
//     />
//     <Habits
//       habits={this.state.habits}
//       onIncrement={this.handleIncrement}
//       onDecrement={this.handleDecrement}
//       onDelete={this.handleDelete}
//       onAdd={this.handleAdd}
//       onReset={this.handleReset}
//     />
//   </>
// );
//   }
// }

// export default App;
