import { shallow } from 'enzyme';
import MonthAmountInfo from './MonthAmountInfo';
import { monthNames } from '../../constants';

describe('components/Container', () => {
  const today = new Date();
  const byDate = new Date();
  byDate.setFullYear(today.getFullYear() + 1); // 1 year diff

  const defaults: GoalData = {
    byDate,
    totalAmount: 12000,
  };

  it('renders the correct monthly amount', () => {
    const tree = shallow(<MonthAmountInfo {...defaults} />);
    expect(tree.find('[data-qa="monthlyAmount"]').text()).toBe('$1,000.00');
  });

  it('renders the correct number of deposit', () => {
    const tree = shallow(<MonthAmountInfo {...defaults} />);
    expect(tree.find('[data-qa="depositCount"]').text()).toBe(
      '12 monthly deposits'
    );
  });

  it('renders the totalAmount', () => {
    const tree = shallow(<MonthAmountInfo {...defaults} />);
    expect(tree.find('[data-qa="totalAmount"]').text()).toBe('$12,000.00');
  });

  it('renders the correct end date', () => {
    const tree = shallow(<MonthAmountInfo {...defaults} />);
    expect(tree.find('[data-qa="monthAndYear"]').text()).toBe(
      `${monthNames[today.getMonth()]} ${today.getFullYear() + 1}.`
    );
  });
});
