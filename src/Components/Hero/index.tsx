import React from "react";
import styles from "./styles.module.scss";
import heroImage from "../../assets/Hero.webp";
import { motion } from "framer-motion";

export default function Hero() {
  const handleWhatsAppClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    message: string
  ) => {
    e.preventDefault();
  
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: "lead_whatsapp",
    });
  
    const encodedMessage = encodeURIComponent(message);
  
    setTimeout(() => {
      window.open(`https://wa.me/555181399275?text=${encodedMessage}`, "_blank");
    }, 300);
  };
  

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
  <div className={styles.ctaButtonsGroup}>
  <motion.a
  href="https://wa.me/5551995930496"
  className={styles.ctaButton}
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.96 }}
  transition={{ type: "spring", stiffness: 300 }}
  onClick={(e) =>
    handleWhatsAppClick(e, "Olá! Tenho interesse em um site profissional.")
  }
>
  Quero um site profissional
</motion.a>

<motion.a
  href="https://wa.me/5551995930496"
  className={`${styles.ctaButton} ${styles.secondaryButton}`}
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.96 }}
  transition={{ type: "spring", stiffness: 300 }}
  onClick={(e) =>
    handleWhatsAppClick(
      e,
      "Olá! Preciso de suporte técnico, ou consultoria de TI."
    )
  }
>
  Preciso de suporte técnico
</motion.a>
  </div>

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
