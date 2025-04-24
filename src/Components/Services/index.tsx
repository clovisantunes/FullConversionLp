import React from "react";
import styles from "./styles.module.scss";
import web from '../../assets/webdesign.webp';
import support from '../../assets/suporte.webp';
import hardware from '../../assets/hardware.webp';
import { motion } from "framer-motion";

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
    gtag: (...args: any[]) => void;
  }
}

type ServiceData = {
  id: string;
};

const servicesData = [
  {
    id: "web",
    layout: "row",
    tagline: "Destaque-se no mundo digital",
    title: "Desenvolvimento Web Profissional",
    subtitle: "Crie um site moderno, otimizado e feito sob medida para o seu negócio.",
    topics: [
      "Aumente suas vendas com um site otimizado para conversão.",
      "Tenha um site responsivo, que funciona em qualquer dispositivo.",
      "Design exclusivo e alinhado à identidade da sua marca.",
      "Sites rápidos, com excelente desempenho em SEO.",
      "Integração com WhatsApp, redes sociais e formulários de contato."
    ],
    buttonText: "Solicitar Orçamento",
    image: web,
    whatsappMessage: "Olá, gostaria de solicitar um orçamento para criação de sites.",
    conversionType: "CONTATO - DESENVOLVIMENTO WEB",
    gaCategory: "desenvolvimento-web",
    gaLabel: "WhatsApp Desenvolvimento Web"
  },
  {
    id: "support",
    layout: "row-reverse",
    tagline: "Tecnologia funcionando a seu favor",
    title: "Suporte Técnico em TI",
    subtitle: "Manutenção, configuração e suporte para manter sua estrutura funcionando com eficiência.",
    topics: [
      "Atendimento rápido para evitar prejuízos com paradas.",
      "Configuração de redes, servidores e estações de trabalho.",
      "Suporte remoto e presencial conforme sua necessidade.",
      "Prevenção de falhas com manutenção periódica.",
      "Consultoria personalizada para melhorar sua infraestrutura de TI."
    ],
    buttonText: "Fale com um especialista",
    image: support,
    whatsappMessage: "Olá, gostaria de informações sobre consultoria e suporte técnico para empresa.",
    conversionType: "CONTATO - SUPORTE TÉCNICO",
    gaCategory: "suporte-tecnico",
    gaLabel: "WhatsApp Suporte Técnico"
  },
  {
    id: "hardware-maintenance",
    layout: "row",
    tagline: "Cuide do seu equipamento com profissionais qualificados",
    title: "Manutenção de Hardware e Equipamentos Eletrônicos",
    subtitle: "Serviços de manutenção preventiva e corretiva para garantir o funcionamento perfeito dos seus dispositivos.",
    topics: [
      "Diagnóstico completo e preciso de hardware.",
      "Limpeza interna para evitar superaquecimento e falhas.",
      "Substituição de peças com garantia de qualidade.",
      "Manutenção de notebooks, computadores e periféricos.",
      "Suporte especializado para nobreaks e sistemas de alimentação ininterrupta."
    ],
    buttonText: "Agende sua Manutenção",
    image: hardware,
    whatsappMessage: "Olá, gostaria de agendar uma manutenção para computador, notebook ou nobreak.",
    conversionType: "CONTATO - MANUTENÇÃO",
    gaCategory: "manutencao-hardware",
    gaLabel: "WhatsApp Manutenção Hardware"
  }
];

export default function Services({ id }: ServiceData) {
  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>, service: typeof servicesData[0]) => {
    e.preventDefault();

    // Google Ads Conversion Tracking
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "conversion",
      conversion_type: service.conversionType,
      eventCategory: "Engajamento",
      eventAction: "Clique",
      eventLabel: service.gaLabel
    });

    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-16543818384/16543818384",
        value: 1.0,
        currency: "BRL",
        transaction_id: `cta_${service.id}_${Date.now()}_${Math.floor(Math.random() * 1000)}`
      });
    }

    window.open(
      `https://wa.me/555181399275?text=${encodeURIComponent(service.whatsappMessage)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className={styles.servicesSection} id={id}>
      {servicesData.map((service) => (
        <motion.div
          key={service.id}
          className={`${styles.serviceItem} ${service.layout === "row-reverse" ? styles.reverse : ""}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.textContent}>
            <span className={styles.tagline}>{service.tagline}</span>
            <h2>{service.title}</h2>
            <p className={styles.subtitle}>{service.subtitle}</p>
            <ul className={styles.topics}>
              {service.topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
            <a
              href={`https://wa.me/5551995930496?text=${encodeURIComponent(service.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
              onClick={(e) => handleWhatsAppClick(e, service)}
              aria-label={`${service.buttonText} via WhatsApp`}
              data-ga-category={service.gaCategory}
            >
              {service.buttonText}
            </a>
          </div>

          <div className={styles.imageContainer}>
            <img src={service.image} alt={service.title} />
          </div>
        </motion.div>
      ))}
    </section>
  );
}