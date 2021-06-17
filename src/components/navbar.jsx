import React, { memo } from 'react';

const Navbar = memo((props) => {
  return (
    <nav className="navbar">
      <i className="navbar-logo fab fa-pagelines"></i>
      <span className="navbar-title">Habit Tracker</span>
      <span className="navbar-count">{props.totalCount}</span>
      <button className="habits-reset" onClick={props.onReset}>
        Reset All
      </button>
    </nav>
  );
});

export default Navbar;
