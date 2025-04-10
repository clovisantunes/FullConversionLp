import React from "react";
import styles from "./styles.module.scss";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import imgLogo from '../../assets/banner.png';

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h1>Entre em Contato</h1>
          <p>Tem um projeto em mente ou precisa de suporte? Fale comigo agora!</p>
        </div>

        <div className={styles.content}>
          <div className={styles.infoBox}>
            <h2>Informações</h2>
            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.icon} />
              <span>Sapiranga, RS - Brasil</span>
            </div>
            <div className={styles.infoItem}>
              <FaEnvelope className={styles.icon} />
              <span>clovis.dev@email.com</span>
            </div>
            <a
              href="https://wa.me/555181399275"
              className={styles.whatsButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className={styles.icon} />
              <span>Falar no WhatsApp</span>
            </a>
            <img src={imgLogo} alt="Contato" className={styles.illustration} />
          </div>

          <form className={styles.form}>
            <h2>Envie uma Mensagem</h2>
            <input type="text" placeholder="Seu nome" required />
            <input type="email" placeholder="Seu e-mail" required />
            <textarea placeholder="Digite sua mensagem..." required />
            <button type="submit">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
}
