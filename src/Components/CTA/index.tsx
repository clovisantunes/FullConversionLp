import React from "react";
import styles from "./styles.module.scss";

const FinalCTA = () => {
  return (
    <section className={styles.finalCta}>
      <div className={styles.overlay}>
        <div className={styles.background} />
        <div className={styles.content}>
          <h2>Transforme sua presença digital</h2>
          <p>
            Tenha um site profissional, rápido e que converte visitantes em
            clientes.
          </p>
          <a
            href="https://wa.me/555181399275?text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
