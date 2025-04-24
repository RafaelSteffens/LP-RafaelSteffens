import styles from "./Contatos.module.css";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contatos() {
  return (
    <section className={styles.section}>
      <h2 className={styles.titulo}>Vamos conversar?</h2>
      <div className={styles.icones}>
        <a
          className={styles.botao}
          href="https://wa.me/5548991771777"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className={styles.icone} />
          WhatsApp:
          <br></br>
          +55 48 99177 1777
        </a>
        <a
          className={styles.botao}
          href="mailto:rafaelfsteffens@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className={styles.icone} />
          Email:
          <br></br>
          rafaelfsteffens@gmail.com
        </a>
        <a
          className={styles.botao}
          href="https://www.linkedin.com/in/rafael-steffens-501147215/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className={styles.icone} />
          LinkedIn
        </a>
        <a
          className={styles.botao}
          href="https://github.com/RafaelSteffens"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={styles.icone} />
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contatos;
