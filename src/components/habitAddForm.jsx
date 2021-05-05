import React, { Component } from 'react';

class HabitAddForm extends Component {
  inputRef = React.createRef();
  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.inputRef.current.value);
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="add-input"
          placeholder="Please enter your habit"
          ref={this.inputRef}
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
