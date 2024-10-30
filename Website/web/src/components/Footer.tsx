import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Projeto Massoterapia Caruaru - Todos os direitos reservados.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#4CAF50',
  padding: '0.75rem',
  textAlign: 'center',
  color: 'white',
  position: 'absolute',
  width: '100%',
  bottom: 0,
};

export default Footer;