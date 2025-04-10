import React, { useState } from "react";
import styles from "./styles.module.scss";
import FinalCTA from "../../Components/CTA";
import profileImage from "../../assets/clovis-dev.webp";

const skills = [
  {
    title: "React, Next.js e TypeScript",
    description:
      "Frameworks modernos para criar interfaces rápidas, responsivas e escaláveis com as melhores práticas do mercado."
  },
  {
    title: "HTML, Sass, Bootstrap",
    description:
      "Construção de layouts elegantes, organizados e 100% responsivos para garantir performance e usabilidade."
  },
  {
    title: "Node.js, Firebase e APIs",
    description:
      "Back-end funcional e leve, com integração a bancos de dados, autenticação e APIs RESTful."
  },
  {
    title: "Infraestrutura de TI",
    description:
      "Suporte completo: redes, servidores, Active Directory e manutenção — garantindo que tudo funcione sem falhas."
  },
  {
    title: "SEO & Performance",
    description:
      "Sites otimizados para aparecer no Google, com carregamento rápido e melhor experiência para o usuário final."
  }
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <div className={styles.imageBlock}>
            <img src={profileImage} alt="Clovis Antunes" />
          </div>
          <div className={styles.textBlock}>
            <h1>Clovis Antunes</h1>
            <p>
              Crio <strong>experiências digitais</strong> com foco em resultado. Sites modernos, rápidos e otimizados para o seu negócio.
            </p>
            <p>
              Da infraestrutura à interface, ofereço <strong>soluções completas</strong> em tecnologia, com qualidade e atenção aos detalhes.
            </p>
          </div>
        </div>

        <div className={styles.skillsSection}>
          <h2>Stack & Especialidades</h2>
          <div className={styles.skillsList}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <button
                  className={`${styles.skillButton} ${
                    activeIndex === index ? styles.active : ""
                  }`}
                  onClick={() => toggleItem(index)}
                >
                  {skill.title}
                  <span className={styles.arrow}>
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className={styles.skillDescription}>
                    <p>{skill.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.quote}>
          <p>“Sites que vendem. Infraestrutura que funciona. Experiência que encanta.”</p>
        </div>
      </div>
      <FinalCTA />
    </section>
  );
}
