import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Inicial.module.css';

const HeroSection = () => {
  const fullText = 'Olá, eu sou o Rafael Steffens ;) ';
  const [displayedText, setDisplayedText] = useState('');
  const [textClass, setTextClass] = useState('');

  const [animateImage, setAnimateImage] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
        setTimeout(() => setTextClass(styles.glow), 300); // adiciona glow depois
      }
    }, 50);
    setTimeout(() => {
      setTextClass(styles.glow);
      setAnimateImage(true); // <- ativa animação da imagem
    }, 300);
    
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
        <h3 className={`${styles.title} ${textClass}`}>{displayedText}</h3>
        <br />
        <p>Sou dev fullstack, como posso te ajudar?</p>
        <br />
        <div className={styles.actions}>

          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "#00ffff", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/5548991771777"
            className={styles.button}
          >
            Entrar em contato
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className={styles.imageContainer}
        initial={{ scale: 1, rotate: 0 }}
        animate={
          animateImage
            ? { scale: [1, 1.1, 1], rotate: [0, 2, 0], boxShadow: "0 0 20px #00ffff" }
            : {}
        }
        whileHover={{ scale: 1.1, rotate: 2 }}
        transition={{
          duration: animateImage ? 1.5 : 0.3,
          ease: "easeInOut",
          type: animateImage ? "tween" : "spring",
          stiffness: 300,
        }}
      >
        <img src="/rafa.jpg" alt="Rafael Steffens" className={styles.avatar} />
      </motion.div>

    </section>
  );
};

export default HeroSection;
