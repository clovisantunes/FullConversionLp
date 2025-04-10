import React from "react";
import styles from './styles.module.scss';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import logoimg from '../../assets/banner.png';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.logo}>
          <img src={logoimg} alt="Logo Clovis" />
        </div>

        <div className={styles.links}>
          <h4>Navegação</h4>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div className={styles.info}>
          <h4>Informações</h4>
          <p>Sapiranga - RS</p>
          <p>Seg à Sex: 08h - 18h</p>
        </div>

        <div className={styles.actions}>
          <h4>Fale conosco</h4>
          <a href="https://wa.me/555181399275" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <p>© {year} Clovis Antunes. Todos os direitos reservados.</p>
        <div className={styles.social}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
