import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Details from '../Details/Details';
import store from '../../redux/store';

describe('Test the Details', () => {
  it('should match to snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Details />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('should return the number of p tags', () => {
    render(
      <Provider store={store}>
        <Router>
          <Details />
        </Router>
      </Provider>,
    );
    const h = screen.getAllByRole('heading');
    expect(h).toHaveLength(2);
  });
});
