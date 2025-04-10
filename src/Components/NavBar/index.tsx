import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import styles from './styles.module.scss';

type NavBarProps = {
  home: string;
  services: string;
  about: string;
  contact: string;
}

export default function NavBar({ home, services, about, contact }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 780);
      if (window.innerWidth > 780) {
        setMenuOpen(false); 
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (location.pathname === "/") {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#services";
    }
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>

      {isMobile && (
        <button
          className={`${styles.menuToggle} ${menuOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}

      <div className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
        <Link to={home}>Início</Link>
        <Link to={about}>Sobre</Link>
        <a href={services} onClick={handleServicesClick}>Serviços</a>
        <Link to={contact}>Contato</Link>
        <a
          href="https://www.instagram.com/clovis_antuness/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.instagramButton}
        >
          <FaInstagram width={24} height={24}/>
          Instagram
        </a>
      </div>
    </div>
  );
}
