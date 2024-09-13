import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Ensure this path is correct

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      navigate('/home'); // Redirect to home page on successful login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-page">

      <div className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username: admin"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password: admin"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
