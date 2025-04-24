import React from "react";
import styles from "./styles.module.scss";
import { LuLaptop, LuServer, LuUserCheck, LuZap, LuTrendingUp, LuMegaphone, LuAward } from "react-icons/lu";
import { motion } from "framer-motion";
import { LucideBarChart2 } from "lucide-react";

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
  },
  // Novos cards focados em ATRAIR CLIENTES:
  {
    id: 4,
    title: "Soluções Rápidas e Eficientes",
    subtitle: "Atendimento remoto ou presencial em até 2 horas para urgências.",
    icon: <LuZap size={40} color="#f8961e" />,
  },
  {
    id: 5,
    title: "Divulgação do Seu Negócio",
    subtitle: "Seu site otimizado para aparecer no Google e redes sociais.",
    icon: <LuMegaphone size={40} color="#7209b7" />,
  },
  {
    id: 6,
    title: "Mais Clientes, Mais Vendas",
    subtitle: "Estratégias para converter visitantes em compradores.",
    icon: <LuTrendingUp size={40} color="#4cc9f0" />,
  },
  {
    id: 7,
    title: "Compromisso com a Qualidade",
    subtitle: "Revisões em etapas para alinhar com suas expectativas.",
    icon: <LuAward size={40} color="#f8961e" />, 
  },
  {
    id: 5,
    title: "Foco no Seu Crescimento",
    subtitle: "Acompanhamento pós-entrega para ajustes necessários.",
    icon: <LucideBarChart2 size={40} color="#2a9d8f" />,
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