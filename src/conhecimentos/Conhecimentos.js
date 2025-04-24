import { useState } from "react";
import styles from "./Conhecimentos.module.css";

const tecnologias = [
  { nome: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png", descricao: "Biblioteca JavaScript para interfaces reativas e componentes reutilizáveis." },
  { nome: "Laravel", logo: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg", descricao: "Framework PHP moderno focado em simplicidade e performance." },
  { nome: "Symfony", logo: "./symfony.png", descricao: "Framework PHP robusto para aplicações complexas e escaláveis." },
  { nome: "Flask", logo: "https://img.icons8.com/nolan/512/flask.png", descricao: "Framework Python para aplicações web simples." },
  { nome: "Spring Boot", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg", descricao: "Framework Java robusto para aplicações escaláveis." },
  { nome: "Bootstrap", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg", descricao: "Framework CSS para criação rápida de layouts responsivos." },
  { nome: "HTML5", logo: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png", descricao: "Linguagem de marcação para estruturar páginas web." },
  { nome: "CSS3", logo: "https://cdn-icons-png.flaticon.com/512/919/919826.png", descricao: "Folhas de estilo modernas para estilização visual avançada." },
  { nome: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg", descricao: "Linguagem de programação para web interativa." },
  { nome: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker.svg", descricao: "Plataforma para criar, gerenciar e rodar aplicações em containers." },
  { nome: "Git", logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg", descricao: "Sistema de versionamento de código amplamente utilizado." }
];

function Conhecimentos() {
  const [ativo, setAtivo] = useState(null);

  return (
    <section className={styles.section}>
      <h1>Conhecimentos</h1>
      <div className={styles.container}>
        
        <div className={styles.cards}>
          {tecnologias.map((tech, index) => (
            <div
              key={index}
              className={`${styles.card} ${ativo === index ? styles.active : ""}`}
              onMouseEnter={() => setAtivo(index)}
              onMouseLeave={() => setAtivo(null)}
            >
              {tech.logo ? (
                <img src={tech.logo} alt={tech.nome} className={styles.logo} />
              ) : (
                <span>{tech.nome}</span>
              )}
            </div>
          ))}
        </div>

        <div className={styles.descricao}>
          <h4>Sobre a tecnologia</h4>
          {ativo !== null && (
            <p className={styles.texto}><h3>{tecnologias[ativo].nome}</h3>{tecnologias[ativo].descricao}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Conhecimentos;
