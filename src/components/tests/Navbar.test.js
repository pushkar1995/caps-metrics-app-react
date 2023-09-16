import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import store from '../../redux/store';

describe('Test the Navbar', () => {
  it('should match to snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('should return the number of Links', () => {
    render(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>,
    );
    const link = screen.getAllByRole('link');
    expect(link).toHaveLength(1);
  });
});
