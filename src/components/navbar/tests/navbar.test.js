import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../navbar';

describe('Navbar', () => {
  it('renders', () => {
    const compnent = renderer.create(<Navbar totalCount={3} />);
    expect(compnent.toJSON()).toMatchSnapshot();
  });
});
