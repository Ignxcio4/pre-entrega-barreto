import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeNavItem, setActiveNavItem] = useState('Home');

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
    // Aquí puedes agregar lógica adicional según el elemento seleccionado
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">Logo</div>
          <ul className="navbar-nav">
            <li className={`nav-item ${activeNavItem === 'Home' ? 'active' : ''}`} onClick={() => handleNavItemClick('Home')}>Home</li>
            <li className={`nav-item ${activeNavItem === 'About' ? 'active' : ''}`} onClick={() => handleNavItemClick('About')}>About</li>
            <li className={`nav-item ${activeNavItem === 'Services' ? 'active' : ''}`} onClick={() => handleNavItemClick('Services')}>Services</li>
            <li className={`nav-item ${activeNavItem === 'Contact' ? 'active' : ''}`} onClick={() => handleNavItemClick('Contact')}>Contact</li>
          </ul>
        </div>
      </nav>
      {/* El contenido principal de tu aplicación */}
    </div>
  );
}

export default App;



