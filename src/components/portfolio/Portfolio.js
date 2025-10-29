import { useState } from "react";
import styles from "./Portfolio.module.css";

const projetos = [
  {
    titulo: "Hydrogen Map",
    imagem: "/hydrogenbrazil.png",
    metrics: (
      <div className={styles.metrics}>
        <div>
          <strong>500+</strong>
          <span>usuários mensais</span>
        </div>
        <div>
          <strong>100+</strong>
          <span>empresas utilizando</span>
        </div>
      </div>
    ),
    conteudo: (
      <div className={styles.modalContent}>
        <div className={styles.realBadge}>Solução estratégica para o setor energético</div>
        
        <div className={styles.modalFlex}>
          <div>
            <img
              src="/hydrogenbrazil.png"
              alt="Hydrogen Map"
              className={styles.modalImage}
            />
          </div>
          <div>
            <h3>Hydrogen Map</h3>
            <p className={styles.expertise}>
              Plataforma geoespacial que mapeia a cadeia do hidrogênio no Brasil
            </p>
            
            <div className={styles.results}>
              <h4>Impacto real gerado:</h4>
              <ul>
                <li>
                  <div className={styles.metricBadge}>✓</div>
                  <span>Adotado por empresas para tomada de decisão estratégica</span>
                </li>
                <li>
                  <div className={styles.metricBadge}>✓</div>
                  <span>Referência para pesquisadores e investidores do setor</span>
                </li>
                <li>
                  <div className={styles.metricBadge}>✓</div>
                  <span>Interface responsiva com experiência de usuário intuitiva</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.techValidation}>
          <h4>Tecnologias que impulsionaram este projeto:</h4>
          <div className={styles.techStack}>
            <span>React</span>
            <span>Mapbox</span>
            <span>Python</span>
            <span>MongoDB</span>
          </div>
        </div>

        <a href="https://www.h2hub.tech/" target="_blank" rel="noreferrer" className={styles.projectLink}>
          Conheça o projeto ao vivo →
        </a>
      </div>
    ),
  },
  {
    titulo: "Hidrogênio Brasil",
    imagem: "/lpHBR.png",
    metrics: (
      <div className={styles.metrics}>
        <div>
          <strong>Alta</strong>
          <span>performance</span>
        </div>
        <div>
          <strong>Ótima</strong>
          <span>experiência</span>
        </div>
      </div>
    ),
    conteudo: (
      <div className={styles.modalContent}>
        <div className={styles.testimonial}>
          <div className={styles.quote}>"Desenvolvimento profissional com atenção aos detalhes"</div>
          <div className={styles.author}>
            <div>
              <strong>Cliente Satisfeito</strong>
              <span>Parceiro estratégico</span>
            </div>
          </div>
        </div>

        <div className={styles.modalFlex}>
          <div>
            <img
              src="/lpHBR.png"
              alt="Hidrogênio Brasil"
              className={styles.modalImage}
            />
          </div>
          <div>
            <h3>Hidrogênio Brasil</h3>
            <p className={styles.expertise}>
              Landing page institucional para iniciativa nacional
            </p>
            
            <div className={styles.results}>
              <h4>Valores entregues:</h4>
              <ul>
                <li>
                  <div className={styles.metricBadge}>✓</div>
                  <span>Comunicação clara da proposta de valor</span>
                </li>
                <li>
                  <div className={styles.metricBadge}>✓</div>
                  <span>Design moderno e responsivo</span>
                </li>
                <li>
                  <div className={styles.metricBadge}>✓</div>
                  <span>Otimizado para atração de investidores</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.techStack}>
          <span>React</span>
          <span>Vercel</span>
          <span>CSS Modules</span>
        </div>
      </div>
    ),
  },
  {
    titulo: "Seu Projeto",
    imagem: "/next-project.jpg",
    metrics: (
      <div className={styles.metrics}>
        <div>
          <strong>Próximo</strong>
          <span>case de sucesso</span>
        </div>
      </div>
    ),
    conteudo: (
      <div className={styles.modalContent}>
        <div className={styles.ctaProject}>
          <h3>Vamos construir sua presença digital de impacto</h3>
          
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>📍</div>
              <h4>Posicionamento Estratégico</h4>
              <p>Soluções que destacam sua autoridade no mercado</p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🚀</div>
              <h4>Tecnologia Moderna</h4>
              <p>Stack atualizada com React, Node.js e bancos de dados eficientes</p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>💡</div>
              <h4>Design Impactante</h4>
              <p>Interfaces que impressionam e convertem visitantes</p>
            </div>
          </div>
          
          <div className={styles.proofSection}>
            <h4>Nossa abordagem comprovada:</h4>
            <div className={styles.proofGrid}>
              <div>
                <div className={styles.proofIcon}>🧠</div>
                <h5>Estratégia Personalizada</h5>
                <p>Soluções sob medida para seu negócio</p>
              </div>
              <div>
                <div className={styles.proofIcon}>⚙️</div>
                <h5>Desenvolvimento Ágil</h5>
                <p>Metodologia eficiente com entregas contínuas</p>
              </div>
              <div>
                <div className={styles.proofIcon}>🔍</div>
                <h5>Otimização Contínua</h5>
                <p>Ajustes baseados em dados reais</p>
              </div>
            </div>
          </div>
          
          <button 
            className={styles.ctaBtn}
            onClick={() => window.location.href = "https://wa.me/5548991771777"}
          >
            Iniciar meu projeto
          </button>
        </div>
      </div>
    ),
  },
];

function Portfolio() {
  const [modalAberto, setModalAberto] = useState(false);
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  const abrirModal = (index) => {
    setProjetoSelecionado(projetos[index]);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.sectionHeader}>
        <h2 className={styles.titulo}>Projetos com Propósito</h2>
        <p className={styles.intro}>
          Cada solução é criada com <strong>expertise técnica</strong> e <strong>visão estratégica</strong> para gerar impacto real. 
          Nosso foco é qualidade, não quantidade.
        </p>
      </div>

      <div className={styles.grid}>
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ backgroundImage: `url(${projeto.imagem})` }}
            onClick={() => abrirModal(index)}
          >
            <div className={styles.cardOverlay}>
              <h3>{projeto.titulo}</h3>
              {projeto.metrics}
              <span className={styles.seeMore}>Ver detalhes ↓</span>
            </div>
          </div>
        ))}
      </div>

      {modalAberto && projetoSelecionado && (
        <div className={styles.modalOverlay} onClick={fecharModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={fecharModal} aria-label="Fechar">
              ✕
            </button>
            {projetoSelecionado.conteudo}
          </div>
        </div>
      )}

      <div className={styles.ctaSection}>
        <div className={styles.commitmentBadge}>Compromisso com resultados</div>
        <h3>Pronto para transformar sua presença digital?</h3>
        <p>
          Combinamos <strong>tecnologia moderna</strong>, <strong>design impactante</strong> e <strong>estratégia digital</strong> para criar soluções que realmente funcionam.
        </p>

        <a 
          href="https://wa.me/5548991771777"
          className={styles.ctaButton}
          >
            Quero Fazer meu Site
          </a>
      </div>
    </section>
  );
}

export default Portfolio;