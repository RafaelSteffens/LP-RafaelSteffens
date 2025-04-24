import { useState } from "react";
import styles from "./Portfolio.module.css";

const projetos = [
    {
        titulo: "Hydrogen Map",
        imagem: "/hydrogenbrazil.png",
        conteudo: (
            <div style={{ color: "#ddd", lineHeight: "1.6" }}>
            <img 
                src="/hydrogenbrazil.png" 
                alt="Hydrogen Map" 
                style={{ 
                width: "100%", 
                borderRadius: "12px", 
                marginBottom: "1.5rem",
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)"
                }} 
            />
            <h3 style={{ color: "#00ffff", marginBottom: "1rem" }}>Hydrogen Map</h3>
            <p>
                O <strong>Hydrogen Map</strong> é uma plataforma interativa que mapeia toda a cadeia de valor do hidrogênio no Brasil.
                Ele oferece dados geoespaciais atualizados e insights estratégicos sobre o setor, sendo uma ferramenta valiosa para investidores,
                pesquisadores e formuladores de políticas.
            </p>
            <a href="https://www.h2hub.tech/">Link para o projeto</a>
            <ul style={{ marginTop: "1rem" }}>
                <li>🗺️ <strong>Geolocalização de players</strong> da produção, transporte e uso do hidrogênio</li>
                <li>📊 <strong>Filtros e gráficos dinâmicos</strong> para análise do setor</li>
                <li>🌱 Contribui para o desenvolvimento de uma economia de baixo carbono</li>
                <li>📱 <strong>Interface responsiva</strong> e moderna, acessível de qualquer dispositivo</li>
            </ul>
            </div>
        )
        }
        ,
        {
        titulo: "Hidrogênio Brasil - Landing Page",
        imagem: "/lpHBR.png", 
        conteudo: (
            <div style={{ color: "#ddd", lineHeight: "1.6" }}>
            <img 
                src="/lpHBR.png" 
                alt="Hidrogênio Brasil - Landing Page" 
                style={{ 
                width: "100%", 
                borderRadius: "12px", 
                marginBottom: "1.5rem",
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)"
                }} 
            />
            <h3 style={{ color: "#00ffff", marginBottom: "1rem" }}>Hidrogênio Brasil – Landing Page</h3>
            <p>
                Desenvolvida com <strong>React</strong>, esta landing page institucional foi criada para representar a iniciativa <strong>Hidrogênio Brasil</strong>, 
                com foco em performance, visual moderno e clareza na comunicação dos objetivos do projeto.
            </p>
            <a href="https://hidrogeniobrasil.vercel.app/">Link para o projeto</a>
            <ul style={{ marginTop: "1rem" }}>
                <li>🚀 Design responsivo e futurista, otimizado para conversão</li>
                <li>🔍 Apresentação clara da proposta de valor da economia do hidrogênio</li>
                <li>📈 Atração de investidores, parceiros e projetos estratégicos</li>
                <li>⚛️ Interface construída em React com componentes modulares</li>
            </ul>
            <p style={{ marginTop: "1rem" }}>
                Essa página é um ponto de entrada poderoso para quem busca conhecer o potencial do hidrogênio como vetor energético
                sustentável e inovador no Brasil.
            </p>
            </div>
        )
        }
        ,
        {
            titulo: "Projeto Fullstack em Parceria",
            imagem: "/lp-aleatoria.jpg", 
            conteudo: (
              <div style={{ color: "#ddd", lineHeight: "1.6" }}>
                <img 
                  src="/lp-aleatoria.jpg" 
                  alt="Projeto em Parceria" 
                  style={{ 
                    width: "100%", 
                    borderRadius: "12px", 
                    marginBottom: "1.5rem",
                    boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)"
                  }} 
                />
                <h3 style={{ color: "#00ffff", marginBottom: "1rem" }}>Em busca de um projeto incrível</h3>
                <p>
                  Este espaço está reservado para um projeto especial com um novo parceiro estratégico. 
                  Estamos à procura de uma empresa ou iniciativa que deseje <strong>impulsionar sua presença digital</strong> com uma aplicação 
                  moderna, interativa e 100% personalizada.
                </p>
                <ul style={{ marginTop: "1rem" }}>
                  <li>🔧 Aplicações fullstack modernas com React, Flask, Docker, API REST e banco de dados</li>
                  <li>🎯 Projetos focados em performance, design e resultados reais</li>
                  <li>💡 Soluções sob medida para startups, negócios e ideias inovadoras</li>
                  <li>🌍 Desenvolvimento colaborativo e transparente com entrega contínua</li>
                </ul>
                <p style={{ marginTop: "1rem" }}>
                  Já temos diversos projetos publicados no nosso <a href="https://github.com/RafaelSteffens" target="_blank" rel="noopener noreferrer" style={{ color: "#00ffff", textDecoration: "underline" }}>GitHub</a>, demonstrando nossa capacidade em criar soluções completas e robustas.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Se você tem uma ideia que precisa sair do papel, entre em contato. Vamos construir algo incrível juntos.
                </p>
              </div>
            )
        }
          
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
    setProjetoSelecionado(null);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.titulo}>Portfólio</h2>
      <div className={styles.grid}>
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ backgroundImage: `url(${projeto.imagem})` }}
            onClick={() => abrirModal(index)}
          >
            <h3 className={styles.cardTitulo}>{projeto.titulo}</h3>
          </div>
        ))}
      </div>

      {modalAberto && projetoSelecionado && (
        <div className={styles.modalOverlay} onClick={fecharModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={fecharModal}>✕</button>
            {projetoSelecionado.conteudo}
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
