import React from "react";
import styles from "./styles.module.scss";
import heroImage from "../../assets/Hero.webp";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1>
          Leve seu <span>negócio</span> ao próximo nível
        </h1>
        <h2>
          Sites profissionais, suporte técnico confiável e soluções que aumentam
          suas vendas
        </h2>

        <div className={styles.ctaSection}>
          <motion.button
            className={styles.ctaButton}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              href="https://wa.me/555181399275?text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              Fale conosco no WhatsApp
            </a>
          </motion.button>
          <span className={styles.ctaNote}>Consultoria gratuita!</span>
        </div>
      </motion.div>

      <motion.div
        className={styles.heroImage}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.015 }}
      >
        <img src={heroImage} alt="Hero" />
      </motion.div>
    </section>
  );
}
