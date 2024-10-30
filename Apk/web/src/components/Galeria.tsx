const Galeria = () => {
  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Galeria de Massoterapia</h2>
      <div style={galleryStyle}>
        <img src="https://via.placeholder.com/150" alt="Massagem Relaxante" style={imageStyle} />
        <img src="https://via.placeholder.com/150" alt="Massagem Terapêutica" style={imageStyle} />
        <img src="https://via.placeholder.com/150" alt="Drenagem Linfática" style={imageStyle} />
        <img src="https://via.placeholder.com/150" alt="Sessão de Massagem" style={imageStyle} />
        <img src="https://via.placeholder.com/150" alt="Ambiente Relaxante" style={imageStyle} />
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '1.5rem',
  backgroundColor: '#f0f0f0',
  borderRadius: '8px',
  marginBottom: '2rem',
};

const titleStyle = {
  color: '#4CAF50',
  fontSize: '1.8rem',
  marginBottom: '1rem',
};

const galleryStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
};

export default Galeria;
