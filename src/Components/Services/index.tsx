import React from "react";
import styles from "./styles.module.scss";
import web from '../../assets/webdesign.jpg';
import support from '../../assets/suporte.jpg';
import { motion } from "framer-motion";

type ServiceData = {
  id: string;
};

const servicesData = [
  {
    id: "web",
    layout: "row", // imagem na direita
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
    image: web
  },
  {
    id: "support",
    layout: "row-reverse", // imagem na esquerda
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
    image: support 
  }
];

export default function Services({ id }: ServiceData) {
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
            <button className={styles.ctaButton}>
            <a
  href="https://wa.me/555181399275?text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.ctaButton}
>
  {service.buttonText}
</a>

              </button>
          </div>

          <div className={styles.imageContainer}>
            <img src={service.image} alt={service.title} />
          </div>
        </motion.div>
      ))}
    </section>
  );
}
