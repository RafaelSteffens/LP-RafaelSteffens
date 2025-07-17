import { motion } from "framer-motion";
import styles from "./About.module.css";
import { FaRocket, FaShieldAlt, FaChartLine } from "react-icons/fa";

function About() {
  return (
    <section className={styles.aboutSection} id="sobre">
      <motion.div 
        className={styles.aboutContainer}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className={styles.title}>
          <span className={styles.titleHighlight}>⚡</span> Eu ajudo negócios como o seu a virar o jogo no digital
        </h1>
        
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <p className={styles.description}>
              <strong>Nos últimos anos, vi empresas perderem milhões</strong> por causa de:
            </p>
            
            <ul className={styles.problemList}>
              <motion.li whileHover={{ x: 5 }}>Sites lentos que afastam clientes</motion.li>
              <motion.li whileHover={{ x: 5 }}>Designs ultrapassados que não convertem</motion.li>
              <motion.li whileHover={{ x: 5 }}>Experiências mobile que frustram usuários</motion.li>
            </ul>

            <div className={styles.truthBox}>
              <p>📉 <strong>A verdade é simples:</strong> Se seu site não passa confiança, você está deixando dinheiro na mesa.</p>
            </div>

            <p className={styles.description}>
              <span className={styles.highlight}>✨ Minha solução:</span> Combino tecnologia de ponta com estratégias de conversão comprovadas para criar sistemas que vendem 24h/dia.
            </p>
          </div>

          <div className={styles.statsCard}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>+97%</div>
              <div className={styles.statLabel}>Aumento médio na velocidade</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>+3.8x</div>
              <div className={styles.statLabel}>Conversões em landing pages</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>100%</div>
              <div className={styles.statLabel}>Sites otimizados para mobile</div>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h2>🎯 Não basta ter um site.<br/> Você precisa de uma máquina de vendas digital!</h2>
          <motion.a
            href="https://wa.me/5548991771777"
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Quero minha presença estratégica
          </motion.a>
        </div>

        <h2 className={styles.subtitle}>Seu negócio merece um site que:</h2>
        
        <div className={styles.features}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={styles.featureCard}
          >
            <FaRocket className={styles.icon} />
            <h3>Voa em qualquer dispositivo</h3>
            <p>Performance otimizada que carrega em menos de 1s e funciona perfeitamente em todos os aparelhos</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className={styles.featureCard}
          >
            <FaShieldAlt className={styles.icon} />
            <h3>Gera confiança instantânea</h3>
            <p>Design profissional com elementos sociais que transformam visitantes em clientes</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className={styles.featureCard}
          >
            <FaChartLine className={styles.icon} />
            <h3>Converte como máquina de vendas</h3>
            <p>Código otimizado para conversão com CTAs estratégicos e jornada de compra inteligente</p>
          </motion.div>
        </div>

        <div className={styles.differentiator}>
          <p>
            <strong>Enquanto outros criam páginas, eu construo sistemas de vendas:</strong><br/>
            Estratégia integrada desde o tráfego até a conversão final
          </p>
          <motion.a
            href="https://wa.me/5548991771777"
            className={styles.ctaSecondary}
            whileHover={{ scale: 1.05 }}
          >
            Quero começar agora
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

export default About;