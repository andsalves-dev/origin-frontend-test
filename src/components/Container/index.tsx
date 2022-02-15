import React, { ReactElement, useCallback, useState } from 'react';
import { ReactComponent as HouseIcon } from '../../assets/icons/buy-a-house.svg';
import Inputs from './Inputs';
import MonthAmountInfo from './MonthAmountInfo';
import styles from './index.module.scss';

export default function Container(): ReactElement {
  const [data, setData] = useState<GoalData>({
    byDate: new Date(),
    totalAmount: 0,
  });

  const onInputsChange = useCallback((data: GoalData) => {
    setData(data);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <HouseIcon className={styles.icon} />
        <h2 className={styles.heading}>Buy a house</h2>
        <span className={styles.subtitle}>Saving goal</span>
      </div>
      <Inputs onChange={onInputsChange} />
      <MonthAmountInfo {...data} />
      <button className={styles.confirmButton}>Confirm</button>
    </div>
  );
}
