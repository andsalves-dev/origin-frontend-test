import React, { ReactElement } from 'react';
import LogoPNG from '../assets/origin-logo.png';
import styles from './Header.module.scss';

export default function Header(): ReactElement {
  return (
    <div className={styles.header}>
      <img alt="Origin Logo" src={LogoPNG} />
    </div>
  );
}
