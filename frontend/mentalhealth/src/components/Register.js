// Register.js
import React, { useState } from 'react';
import firebase from '../firebase';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      localStorage.setItem('isNewUser', 'true'); // Set isNewUser flag for onboarding
      // You can also store additional user information in your FastAPI backend here
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
