import React from 'react';
import './header.css';

const Header = ({ setFilterInput }) => {
    const handleSearch = (event) => {
        event.preventDefault();
        const input = event.target.elements.filterInput.value;
        console.log("Filtro de busca:", input);
        setFilterInput(input);
    };

    return (
        <header className="header">
            <nav>
                <img src="src/assets/logo.png" alt="Logo" />
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">PLANOS</a></li>
                    <li><a href="#">QUEM SOMOS</a></li>
                </ul>
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        name="filterInput"
                        placeholder="Digite Localização ou Categoria"
                    />
                    <button type="submit">Buscar</button>
                </form>
            </nav>
        </header>
    );
};

export default Header;
