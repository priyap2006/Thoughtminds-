import React, { useState } from 'react';

function LoginForm() {
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
    <div> 
        <LoginForm/>
    </div>
  )

    
}

export default LoginForm;
