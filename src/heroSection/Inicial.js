import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Inicial.module.css';

const HeroSection = () => {
  const fullText = 'Olá, eu sou o Rafael Steffens ;) ';
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroSection}>
      <motion.div
        initial={{ opacity: 0, x: +140 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className={styles.textContainer}
      >
        <h3 className={styles.title}>{displayedText}</h3>
        <br></br>
        <p>Sou dev fullstack, como posso te ajudar?</p>
        <br></br>
        <div className={styles.actions}>
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "#00ffff", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            href="CurriculoRafaelSteffens.pdf"
            download="CurriculoRafaelSteffens"
            className={styles.button}
          >
            Baixar Currículo
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "#00ffff", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className={styles.button}
          >
            Entrar em contato
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className={styles.imageContainer}
        whileHover={{ scale: 1.1, rotate: 2 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <img src="/rafa.jpg" alt="Rafael Steffens" className={styles.avatar} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
