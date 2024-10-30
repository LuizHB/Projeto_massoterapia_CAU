const Services = () => {
    return (
        <section style={sectionStyle}>
            <h2 style={titleStyle}>Serviços Disponíveis</h2>
            <p style={textStyle}>
                Oferecemos uma variedade de serviços de massoterapia a preços acessíveis, todos pensados para melhorar a saúde física e mental:
            </p>
            <ul style={listStyle}>
                <li><strong>Massagem Relaxante:</strong> Ideal para reduzir o estresse do dia a dia e trazer sensação de paz.</li>
                <li><strong>Massagem Terapêutica:</strong> Focada em dores musculares e recuperação física, ideal para quem sofre de tensão muscular.</li>
                <li><strong>Drenagem Linfática:</strong> Ajuda na circulação e redução de inchaços, melhorando o fluxo corporal.</li>
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

export default Services;
