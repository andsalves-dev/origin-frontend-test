import { shallow } from 'enzyme';
import Header from './Header';

describe('components/Header', () => {
  it('renders a the company logo', () => {
    const tree = shallow(<Header />);
    expect(tree.find('img').first().prop('alt')).toBe('Origin Logo');
  });
});
