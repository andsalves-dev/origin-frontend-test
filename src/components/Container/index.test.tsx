import { shallow } from 'enzyme';
import Container from './index';

describe('components/Container', () => {
  it('renders the heading and subtitle', () => {
    const tree = shallow(<Container />);
    expect(tree.find('.heading').first().text()).toBe('Buy a house');
    expect(tree.find('.subtitle').first().text()).toBe('Saving goal');
  });

  it('updates MonthAmountInfo props when Inputs::onChange is called', () => {
    const goalData = {
      byDate: new Date('2032-12-01'),
      totalAmount: 1000,
    };
    const tree = shallow(<Container />);
    tree.find('Inputs').simulate('change', goalData);
    expect(tree.find('MonthAmountInfo').props()).toMatchObject(goalData);
  });
});
