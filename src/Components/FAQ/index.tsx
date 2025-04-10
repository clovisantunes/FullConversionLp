import React, { useState } from 'react';
import styles from './styles.module.scss';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: 'Quanto tempo leva para o site ficar pronto?',
    answer: 'O tempo médio varia entre 7 a 15 dias úteis, dependendo das funcionalidades e do conteúdo.',
  },
  {
    question: 'Preciso já ter um domínio e hospedagem?',
    answer: 'Não precisa! Te ajudo com tudo: registro de domínio, escolha de hospedagem e configuração.',
  },
  {
    question: 'Você oferece suporte depois que o site está no ar?',
    answer: 'Sim! Tenho opções de suporte técnico mensal ou avulso para garantir que tudo funcione bem.',
  },
  {
    question: 'O que está incluso no suporte técnico?',
    answer: 'Diagnóstico de problemas, manutenção preventiva, atualizações, consultoria e otimizações.',
  },
  {
    question: 'Você também faz integração com redes sociais?',
    answer: 'Sim. Integro WhatsApp, Instagram, formulários e outros recursos úteis para seu negócio.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection} id="faq">
      <h2>Perguntas Frequentes</h2>
      <p className={styles.subtitle}>Tire suas dúvidas antes de solicitar seu orçamento</p>

      <div className={styles.faqList}>
        {faqData.map((item, index) => (
          <div
            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
            key={index}
            onClick={() => toggleIndex(index)}
          >
            <div className={styles.question}>
              <h3>{item.question}</h3>
              {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            <div className={styles.answer}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
