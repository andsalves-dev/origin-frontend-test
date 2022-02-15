import React from 'react';
import Header from './components/Header';
import styles from './App.module.scss';
import Container from './components/Container';

export function App(): JSX.Element {
  return (
    <>
      <Header />
      <p className={styles.description}>
        Let&apos;s plan your <strong>saving goal</strong>.
      </p>
      <Container />
    </>
  );
}
