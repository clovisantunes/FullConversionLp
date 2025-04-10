import React from "react";
import styles from "./styles.module.scss";
import { LuLaptop, LuServer, LuUserCheck } from "react-icons/lu";
import { motion } from "framer-motion";


const benefits = [
    {
      id: 1,
      title: "Sites que Vendem",
      subtitle: "Crie presença online com foco em conversão, performance e visual moderno.",
      icon: <LuLaptop size={40} color="#e63946" />,
    },
    {
      id: 2,
      title: "Ambiente de Trabalho Sem Interrupções",
      subtitle: "Mantenha sua infraestrutura funcionando com segurança, velocidade e suporte confiável.",
      icon: <LuServer size={40} color="#457b9d" />,
    },
    {
      id: 3,
      title: "Atendimento Direto e Sem Complicação",
      subtitle: "Falo sua linguagem e entrego soluções objetivas e transparentes.",
      icon: <LuUserCheck size={40} color="#2a9d8f" />,
    }
  ];

export default function Why() {
  return (
    <section className={styles.whySection}>
      <h2 className={styles.sectionTitle}>Vantagens que entrego para seu negócio!</h2>
      <div className={styles.benefitsContainer}>
      {benefits.map((item, index) => (
  <motion.div
    key={item.id}
    className={styles.benefitCard}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <span>{item.icon}</span>
    <h3>{item.title}</h3>
    <p>{item.subtitle}</p>
  </motion.div>
))}
      </div>
    </section>
  );
}
