const Benefits = () => {
    return (
        <section style={sectionStyle}>
        <h2 style={titleStyle}>Benefícios para a Comunidade</h2>
        <p style={textStyle}>Nosso objetivo é proporcionar:</p>
        <ul style={listStyle}>
          <li>Cuidados de saúde acessíveis para todos</li>
          <li>Promoção do bem-estar físico e mental</li>
          <li>Facilidade no agendamento de serviços de massoterapia</li>
          <li>Conscientização sobre a importância do autocuidado e saúde preventiva</li>
        </ul>
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
    color: '#4CAF50',
  };
  
  const listStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#4CAF50',
  };

export default Benefits;
