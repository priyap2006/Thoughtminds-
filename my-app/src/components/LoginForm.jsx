import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';


const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net'
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org'
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca'
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info'
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz'
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me'
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io'
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz'
  }
];



function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
      const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      alert("Can't login: Email not found.");
      return;
    }

    const expectedPassword = `${user.username}@123`;

    if (password !== expectedPassword) {
      alert("Can't login: Incorrect password.");
      return;
    }
    

    setEmail('');
    setPassword('');
    alert('Form submitted successfully');

  
    navigate('/profile');
  };
  console.log("LoginForm rendered")

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
                
                title="At least 8 characters with at least one letter and one number"
              />
            </div>

            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
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

export default LoginForm;
