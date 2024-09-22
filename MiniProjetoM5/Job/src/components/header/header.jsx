import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <img src="../assets/logo.png" alt="Logo da aplicação" className="logo" />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Planos</a></li>
          <li><a href="#">Quem somos</a></li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Pesquisar vaga" />
          <button>Pesquisar</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;