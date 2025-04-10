import React from 'react';
import styles from './styles.module.scss';

const FinalCTA = () => {
  return (
    <section className={styles.finalCta}>
      <div className={styles.overlay}>
        <div className={styles.background} />
        <div className={styles.content}>
          <h2>Transforme sua presença digital</h2>
          <p>Tenha um site profissional, rápido e que converte visitantes em clientes.</p>
          <a href="#contato" className={styles.button}>Solicitar Orçamento</a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
