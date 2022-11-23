import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/configurestore';
import Gallery from '../components/Gallery';

const info = [{
  id: 27992,
  title: 'A Sunday on La Grande Jatte — 1884',
  image_id: '1adf2696-8489-499b-cad2-821d7fde4b33',
}];

let spyFunc;
beforeEach(() => {
  spyFunc = jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(info),
  });
  render(
    <Router>
      <Provider store={store}>
        <Gallery />
      </Provider>
    </Router>,
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Art Gallery', () => {
  test('should display an img', async () => {
    expect(spyFunc).toBeCalled();
    const art = screen.getByText('A Sunday on La Grande Jatte — 1884');
    await waitFor(() => expect(art.getByText('A Sunday on La Grande Jatte — 1884')
      .toBe('A Sunday on La Grande Jatte — 1884')));
  });
});
