import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';


import Inicial from './heroSection/Inicial';
import About from './about/About';
import Conhecimentos from './conhecimentos/Conhecimentos';
import Portfolio from './portfolio/Portfolio';
import Contatos from './contatos/Contatos';
import SectionWrapper from './components/SectionWrapper';

function App() {



  const [whiteMode, setWhiteMode] = useState(false);
  useEffect(() => {
    if (whiteMode) {
      document.body.classList.add('white-mode');
    } else {
      document.body.classList.remove('white-mode');
    }
  }, [whiteMode]);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          zIndex: 999,
        }}
      >
        {/* Switch Button */}
        <motion.div
          onClick={() => setWhiteMode(prev => !prev)}
          style={{
            width: '80px',
            height: '40px',
            backgroundColor: whiteMode ? '#ffffff' : 'var(--bg-color)', // inversão de cor
            borderRadius: '50px',
            display: 'flex',
            alignItems: 'center',
            padding: '5px',
            cursor: 'pointer',
            boxShadow: `0 2px 10px ${whiteMode ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.4)'}`,
          }}
        >
          {/* O botão interno que desliza */}
          <motion.div
            animate={{ x: whiteMode ? 40 : 0 }} // move o botão para a direita se o modo for "whiteMode"
            transition={{ type: 'spring', stiffness: 300 }}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: whiteMode ? 'var(--accent-color)' : '#fff',
            }}
          />
        </motion.div>
      </div>

      <div className="App">
        <SectionWrapper><Inicial /></SectionWrapper>
        <SectionWrapper><About /></SectionWrapper>
        <SectionWrapper><Conhecimentos /></SectionWrapper>
        <SectionWrapper><Portfolio /></SectionWrapper>
        <SectionWrapper><Contatos /></SectionWrapper>
      </div>
    </>
  );
}

export default App;
