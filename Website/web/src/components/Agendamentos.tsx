import React from 'react';

const Agendamento = () => {
  const handleAgendamento = () => {
    alert('Em breve, você poderá agendar seus serviços de massagem diretamente aqui.');
  };

  return (
    <section>
      <h2>Agende um Serviço</h2>
      <p>
        Faça seu agendamento com facilidade. Clique no botão abaixo para iniciar o processo. Em breve, será possível agendar diretamente pelo aplicativo.
      </p>
      <button onClick={handleAgendamento} style={buttonStyle}>
        Agendar Serviço
      </button>
    </section>
  );
};

const buttonStyle = {
  padding: '1rem 2rem',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  marginTop: '1rem',
};

export default Agendamento;

