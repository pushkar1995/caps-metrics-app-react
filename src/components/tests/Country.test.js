import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Country from '../country/Country';
import store from '../../redux/store';

describe('Test the Country Component', () => {
  it('should match to snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Country />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
