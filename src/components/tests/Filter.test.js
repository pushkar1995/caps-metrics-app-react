import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Filter from '../filter/Filter';
import store from '../../redux/store';

describe('Test the Filter', () => {
  it('should match to snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Filter />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('should return the number options', () => {
    render(
      <Provider store={store}>
        <Router>
          <Filter />
        </Router>
      </Provider>,
    );
    const option = screen.getAllByRole('option');
    expect(option).toHaveLength(5);
  });
});
