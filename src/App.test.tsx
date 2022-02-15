import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {
  it('renders a Header', () => {
    const tree = shallow(<App />);
    expect(tree.find('Header').exists()).toBe(true);
  });

  it('renders a Container', () => {
    const tree = shallow(<App />);
    expect(tree.find('Container').exists()).toBe(true);
  });
});
