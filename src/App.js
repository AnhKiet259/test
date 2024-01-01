import logo from './logo.svg';
import './App.css';
import RegisterPage from './Components/RegisterAccount';
import React from 'react';
import ThreeScene from './Components/ThreeScene';

function App() {
  return (
    <div>
      <header>
        <h1 header className="app-title"> HỒ SƠ NGƯỜI DÙNG </h1>
      </header>
      <RegisterPage />
      <div className="three-d-component-wrapper">
        {/* Set max-width and max-height for the container */}
        <div style={{ maxWidth: '60px', maxHeight: '40px', overflow: 'hidden' }}>
          <ThreeScene />
        </div>
      </div>
    </div>
  );
}

export default App;
