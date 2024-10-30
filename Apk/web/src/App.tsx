import './App.css'
import Header from './components/header';
import Footer from './components/Footer';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Agendamento from './components/Agendamentos';
import Galeria from './components/Galeria';

function App() {
  return (
    <div style={appStyle}>
      <Header />
      <main style={{ padding: '2rem' }}>
        <Services />
        <Benefits />
        <Agendamento />
        <Galeria />
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