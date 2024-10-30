const Agendamento = () => {
    const handleAgendamento = () => {
      alert('Em breve, você poderá agendar seus serviços de massagem diretamente aqui.');
    };
  
    return (
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Agende um Serviço</h2>
        <p style={textStyle}>
          Faça seu agendamento de forma rápida e simples. Clique no botão abaixo para iniciar. Em breve, o agendamento poderá ser feito diretamente pelo aplicativo!
        </p>
        <button onClick={handleAgendamento} style={buttonStyle}>
          Agendar Serviço
        </button>
      </section>
    );
  };
  
  const sectionStyle = {
    padding: '1.5rem',
    backgroundColor: '#fff3e0',
    borderRadius: '8px',
    marginBottom: '2rem',
  };
  
  const titleStyle = {
    color: '#ff9800',
    fontSize: '1.8rem',
  };
  
  const textStyle = {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    color: '#333',
  };
  
  const buttonStyle = {
    padding: '1rem 2rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    marginTop: '1rem',
    borderRadius: '4px',
    fontSize: '1rem',
  };
  
export default Agendamento;

