import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const login = () => {
    if (cpf && password) {
      alert('Login successful');
      // Navegar para a próxima página ou realizar a ação de login
    } else {
      alert('Por favor, preencha todos os campos');
    }
  };

  return (
    <div className="container">
      <div className="title">Chemical <span>Stock</span></div>
      <div className="login-container">
        <h2>Login</h2>
        <div className="input-field">
          <input 
            type="text" 
            placeholder="CPF" 
            value={cpf} 
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input 
            type={showPassword ? 'text' : 'password'} 
            placeholder="Senha" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="toggle-password" onClick={togglePasswordVisibility}>
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
        <div className="forgot-password">Esqueceu sua Senha?</div>
        <button onClick={login}>ENTRAR</button>
      </div>
    </div>
  );
};

export default Login;
