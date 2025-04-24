import React, { useRef, useState } from "react";
import styles from "./styles.module.scss";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import imgLogo from '../../assets/banner.webp';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fullMessage = `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${msg}`;

    const templateParams = {
      message: fullMessage,
    };

    emailjs.send(
      'service_512o7pl',
      'template_79avuvb',
      templateParams,
      'UPYl9l_mQVlWxFlY4'
    )
    .then(() => {
      alert("Mensagem enviada com sucesso!");
      setName("");
      setEmail("");
      setMsg("");
    })
    .catch((error) => {
      console.error("Erro ao enviar mensagem:", error);
      alert("Ocorreu um erro. Tente novamente mais tarde.");
    });
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h1>Entre em Contato</h1>
          <p>Tem um projeto em mente ou precisa de suporte? Fale comigo agora!</p>
        </div>

        <div className={styles.content}>
          <div className={styles.infoBox}>
            <h2>Informações</h2>
            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.icon} />
              <span>Sapiranga, RS - Brasil</span>
            </div>
            <div className={styles.infoItem}>
              <FaEnvelope className={styles.icon} />
              <span>contato@clovisantunes.com.br</span>
            </div>
            <a
              href="https://wa.me/5551995930496"
              className={styles.whatsButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className={styles.icon} />
              <span>Falar no WhatsApp</span>
            </a>
            <img src={imgLogo} alt="Contato" className={styles.illustration} />
          </div>

          <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
            <h2>Envie uma Mensagem</h2>
            <input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Digite sua mensagem..."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              required
            />
            <button type="submit">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
}
