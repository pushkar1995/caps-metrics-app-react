import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Homepage from '../Home';
import store from '../../redux/store';

describe('Test the Homepage', () => {
  it('should match to snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Homepage />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
