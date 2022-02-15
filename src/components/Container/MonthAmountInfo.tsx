import React, { ReactElement } from 'react';
import styles from './index.module.scss';
import { monthNames } from '../../constants';
import { formatMoney } from '../../utils';

export default function MonthAmountInfo(props: GoalData): ReactElement {
  const today = new Date();
  const { totalAmount, byDate } = props;
  const monthDiff =
    (byDate.getFullYear() - today.getFullYear()) * 12 +
    byDate.getMonth() -
    today.getMonth();

  return (
    <div className={styles.monthlyAmountInfo}>
      <div>
        <label>Monthly amount</label>
        <div className={styles.monthlyAmount} data-qa="monthlyAmount">
          ${formatMoney(totalAmount / monthDiff)}
        </div>
      </div>
      <p>
        You’re planning{' '}
        <strong data-qa="depositCount">{monthDiff} monthly deposits</strong> to
        reach your{' '}
        <strong data-qa="totalAmount">${formatMoney(totalAmount)}</strong> goal
        by{' '}
        <strong data-qa="monthAndYear">
          {monthNames[byDate.getMonth()]} {byDate.getFullYear()}.
        </strong>
      </p>
    </div>
  );
}
