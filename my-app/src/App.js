import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
    alert('Form submitted successfully');
  };

  return (

    <div className="container">
      <div className="loginpage">
        <div className="form-container">
          <form id="myForm" onSubmit={handleSubmit}>
            <h5>Login</h5>

            <div className="form-group full-width input">
              <label>
                Email ID: <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
                title="Please enter a valid email address"
              />
            </div>

            <br />

            <div className="form-group full-width input">
              <label>
                Password<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength="8"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                title="At least 8 characters with at least one letter and one number"
              />
            </div>

            <a href="/forgot-password" className='forgot-password'>Forgot Password?</a>

            <br />

            <input type="submit" value="Login" />
            <hr />
           <a href="/register">Create a new account</a>
          </form>
        </div>
      </div>
    </div>
  
  );
}

export default App;
