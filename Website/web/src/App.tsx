import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Header from './components/header';
import Footer from './components/Footer';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Agendamento from './components/Agendamentos';
import './styles/global.css';

// function App() {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2>Quem Somos</h2>
//       <p>
//         Este aplicativo conecta profissionais de massoterapia com a comunidade de Caruaru, facilitando o agendamento de serviços de bem-estar.
//       </p>
//       <section>
//         <h3>Serviços Disponíveis</h3>
//         <ul>
//           <li>Massagem Relaxante</li>
//           <li>Massagem Terapêutica</li>
//           <li>Drenagem Linfática</li>
//         </ul>
//       </section>

//       <section>
//         <h3>Benefícios</h3>
//         <p>
//           Nosso objetivo é proporcionar acesso a cuidados de saúde e bem-estar para toda a comunidade carente de Caruaru.
//         </p>
//       </section>

//       <button onClick={() => alert('Agendamento em breve!')}>Agendar um Serviço</button>
//     </div>
//   );
// }

function App() {
  return (
    <div style={appStyle}>
      <Header />
      <main style={{ padding: '2rem' }}>
        <Services />
        <Benefits />
        <Agendamento />
      </main>
      <Footer />
    </div>
  );
}

const appStyle = {
  minHeight: '100vh',
  position: 'relative',
  paddingBottom: '4rem', // Espaco para o footer
};

export default App;