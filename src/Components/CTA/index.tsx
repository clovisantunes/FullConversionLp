import React from "react";
import styles from "./styles.module.scss";

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
    gtag: (...args: any[]) => void;
  }
}

const FinalCTA: React.FC = () => {
  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "conversion",
      conversion_type: "CONTATO - CTA",
      eventCategory: "Engajamento",
      eventAction: "Clique",
      eventLabel: "WhatsApp CTA"
    });

    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-16543818384/16543818384",
        value: 1.0,
        currency: "BRL",
        transaction_id: `cta_${Date.now()}_${Math.floor(Math.random() * 1000)}`
      });
    }

    window.open(
      "https://wa.me/555181399275?text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es!",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className={styles.finalCta} data-testid="final-cta-section">
      <div className={styles.overlay}>
        <div className={styles.background} />
        <div className={styles.content}>
          <h2>Transforme sua presença digital</h2>
          <p>
            Tenha um site profissional, rápido e que converte visitantes em
            clientes.
          </p>
          <a
            href="https://wa.me/5551995930496?text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
            onClick={handleWhatsAppClick}
            aria-label="Solicitar orçamento via WhatsApp"
            data-ga-category="contato-cta"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;