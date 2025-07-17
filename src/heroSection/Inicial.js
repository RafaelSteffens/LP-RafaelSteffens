import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Inicial.module.css';

const HeroSection = () => {
  const fullText = 'Rafael Steffens';
  const [displayedText, setDisplayedText] = useState('');
  const [textClass, setTextClass] = useState('');
  const [animateImage, setAnimateImage] = useState(false);
  const canvasRef = useRef(null);
  
  // Contadores reais (ajuste com seus números)
  const [speedCounter, setSpeedCounter] = useState(0);
  const [projectsCounter, setProjectsCounter] = useState(0);
  const [satisfactionCounter, setSatisfactionCounter] = useState(0);
  
  const targetSpeed = 98; // pontuação média no PageSpeed
  const targetProjects = 47; // projetos entregues
  const targetSatisfaction = 100; // satisfação do cliente

  useEffect(() => {
    // Animação de digitação
    let i = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(typingInterval);
        setTimeout(() => setTextClass(styles.glow), 300);
      }
    }, 150);
    
    // Ativar animação da imagem
    setTimeout(() => {
      setTextClass(styles.glow);
      setAnimateImage(true);
    }, 300);
    
    // Animação dos contadores
    const counterInterval = setInterval(() => {
      setSpeedCounter(prev => prev < targetSpeed ? prev + 1 : targetSpeed);
      setProjectsCounter(prev => prev < targetProjects ? prev + 1 : targetProjects);
      setSatisfactionCounter(prev => prev < targetSatisfaction ? prev + 1 : targetSatisfaction);
    }, 30);
    
    // Configurar o canvas para partículas (mesmo código anterior)
    // ... (código permanece igual)
    
    return () => {
      clearInterval(typingInterval);
      clearInterval(counterInterval);
      // Limpar animação do canvas
    };
  }, []);

  return (
    <section className={styles.heroSection}>
      <canvas ref={canvasRef} className={styles.particlesCanvas} />
      
      <div className={styles.floatingElements}>
        {/* Elementos flutuantes (mesmo código) */}
      </div>
      
      <div className={styles.contentWrapper}>

        
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className={styles.textContainer}
        >

          <h1 className={`${styles.title} ${textClass}`}>
            {displayedText}
            <span className={styles.cursor}>|</span>
          </h1>
          
          <p className={styles.subtitle}>
            Especialista em criar <strong>experiências digitais rápidas e conversivas</strong> com tecnologia de ponta
          </p>
          
          <div className={styles.resultsGrid}>
            <div className={styles.resultCard}>
              <div className={styles.counter}>{speedCounter}%+</div>
              <div className={styles.resultLabel}>Performance Média</div>
              <div className={styles.resultSub}>PageSpeed Insights</div>
            </div>
            
            <div className={styles.resultCard}>
              <div className={styles.counter}>{projectsCounter}+</div>
              <div className={styles.resultLabel}>Projetos Entregues</div>
              <div className={styles.resultSub}>Com excelência técnica</div>
            </div>
            
            <div className={styles.resultCard}>
              <div className={styles.counter}>{satisfactionCounter}%</div>
              <div className={styles.resultLabel}>Satisfação Cliente</div>
              <div className={styles.resultSub}>Projetos bem sucedidos</div>
            </div>
          </div>
          
          <div className={styles.actions}>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "#00ffff", color: "#000" }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/5548991771777"
              className={styles.buttonPrimary}
            >
              Quero um site profissional
            </motion.a>
            

          </div>
        </motion.div>

        <div className={styles.containerTitleImage}>
          <motion.h3 
            className={styles.preTitle}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Desenvolvedor de Sites de Alta Performance
          </motion.h3>
          
          <motion.div
            className={styles.imageContainer}
            // ... (animações permanecem iguais)
          >
            
            <img src="/rafa.jpg" alt="Rafael Steffens" className={styles.avatar} />
            <div className={styles.imageGlow}></div>
            

          </motion.div>

        </div>

      </div>
      
      <div className={styles.scrollIndicator}>
        <span>Como eu trabalho</span>
        <div className={styles.arrow}></div>
      </div>
    </section>
  );
};

export default HeroSection;