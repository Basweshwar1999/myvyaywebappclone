import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate replaces useHistory
import '../Styles/Dashboard.css'; // Assuming you have a CSS file for styling

const Login= () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleLogin = async (e) => {

    e.preventDefault();
   

    if (username === 'basweshwar' && password === 'Rutik@1902') {
      // Login successful
      navigate('/dashboard');

    } else {
      alert('Invalid username or password');
    }

    return false;

    const payload = {
      userName: username,
      password: password,
      deviceToken: 'U2FsdGVkX1/5jzYasrM4q0jOnT157V4X+ogTwA0hVQXOXh3Pom/dOH575qV4oBAGhD39ojsaaq1jOYpYKd6QvQ==', // Example device token
      requestSource: 'mobileapp',
    };

    try {
      const response = await fetch('http://localhost:59144/LoginUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("rutik________________",data);
      if (response.ok) {
        // Assuming token is in data.token, store it and navigate to dashboard
        if (!data.isException) {
          localStorage.setItem('token', data.token);
          navigate('/dashboard');
        
        }
      } else {
        setErrorMessage(data.message || 'Invalid username or password');
      }
    } catch (error) {
      setErrorMessage('An error occurred while logging in. Please try again later.');
    }
  };

  return (
    <div className="login-page" >
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
