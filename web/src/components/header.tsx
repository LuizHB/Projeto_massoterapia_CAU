import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Bem-vindo ao App de Massoterapia Caruaru</h1>
      <p>Cuidados de bem-estar ao alcance da comunidade carente</p>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#4CAF50',
  padding: '1.5rem',
  textAlign: 'center',
  color: 'white',
};

export default Header;