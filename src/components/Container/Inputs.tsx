import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { ReactComponent as DollarIcon } from '../../assets/icons/dollar-icon.svg';
import { ReactComponent as LeftIcon } from '../../assets/icons/left-icon.svg';
import { monthNames, next50Years } from '../../constants';
import { ReactComponent as RightIcon } from '../../assets/icons/right-icon.svg';
import { formatMoney } from '../../utils';
import styles from './index.module.scss';

type Props = {
  onChange: (data: GoalData) => void;
};
const MAX_AMOUNT = 10000000000;

export default function Inputs({ onChange }: Props): ReactElement {
  const today = new Date();
  const [totalAmount, setTotalAmount] = useState('25000');
  const [monthIndex, setMonthIndex] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear() + 1);

  const onAmountInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replaceAll(new RegExp(/[^0-9.]/g), '');
    value = value.split('.').slice(0, 2).join('.');

    if (Number(value) > MAX_AMOUNT) {
      alert(
        "Max supported amount is 10 billion. Maybe you're already too rich."
      );
      value = String(MAX_AMOUNT);
    }

    setTotalAmount(value);
  };
  const onYearSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newYear = Number(e.target.value);
    setYear(newYear);
    setMonthIndex(newYear > today.getFullYear() ? 0 : today.getMonth() + 1);
  };
  const onMonthSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setMonthIndex(Number(e.target.value));
  };

  const incrementMonth = () => {
    if (monthIndex >= 11) {
      setYear((_year) => _year + 1);
      setMonthIndex(0);
    } else {
      setMonthIndex((_monthIndex) => _monthIndex + 1);
    }
  };
  const canDecrement = (_monthIndex: number) => {
    return _monthIndex > today.getMonth() + 1 || year > today.getFullYear();
  };
  const decrementMonth = () => {
    if (!canDecrement(monthIndex)) return;

    if (monthIndex <= 0) {
      setYear((_year) => _year - 1);
      setMonthIndex(11);
    } else {
      setMonthIndex((_monthIndex) => _monthIndex - 1);
    }
  };

  useEffect(() => {
    const byDate = new Date();
    byDate.setFullYear(year);
    byDate.setMonth(monthIndex);

    onChange({ totalAmount: Number(totalAmount), byDate });
  }, [year, monthIndex, totalAmount, onChange]);

  return (
    <div className={styles.inputGroup}>
      <label>
        Total amount
        <div className={styles.amountInput}>
          <DollarIcon className={styles.dollarIcon} />
          <input
            name="amount"
            value={formatMoney(totalAmount, false)}
            onChange={onAmountInputChange}
          />
        </div>
      </label>
      <label>
        Reach goal by
        <div className={styles.goalByInput}>
          <LeftIcon
            className={`${styles.leftIcon} ${
              !canDecrement(monthIndex) ? styles.disabledArrow : ''
            }`}
            role="button"
            onClick={decrementMonth}
          />
          <select
            name="month"
            value={monthIndex}
            onChange={onMonthSelectChange}
          >
            {monthNames.map((month, _monthIndex) => (
              <option
                key={month}
                value={_monthIndex}
                disabled={!canDecrement(_monthIndex)}
              >
                {month}
              </option>
            ))}
          </select>
          <select name="year" onChange={onYearSelectChange} value={year}>
            {next50Years.map((_year) => (
              <option key={_year} value={_year}>
                {_year}
              </option>
            ))}
          </select>
          <RightIcon
            className={styles.rightIcon}
            role="button"
            onClick={incrementMonth}
          />
        </div>
      </label>
    </div>
  );
}
