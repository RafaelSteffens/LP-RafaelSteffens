import { motion } from "framer-motion";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.aboutSection}>
      <motion.div 
        className={styles.aboutContainer}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>Sobre Mim</h1>
        <p className={styles.description}>
          Sou apaixonado por tecnologia e inovação, com 3 anos de experiência em desenvolvimento web. 
          Tenho experiência com PHP utilizando os frameworks Symfony e Laravel, além de ter proficiência em Java com Spring Boot 
          e Python com Flask (incluindo análise de dados). Tenho domínio das principais tecnologias de frontend como 
          HTML, CSS e JavaScript, e estou iniciando com React. Também sou familiarizado com ferramentas como MySQL, 
          Docker, Git, APIs RESTful e ambientes Linux. Minhas principais qualidades incluem aprendizado rápido, 
          resolução de problemas, colaboração em equipe e gestão eficiente do tempo. Estou constantemente em busca 
          de desafios que me permitam evoluir e gerar valor nos projetos dos quais participo.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
