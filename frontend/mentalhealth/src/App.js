// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import firebase from './firebase'; // Your Firebase configuration
import Home from './components/HomeScreen';
import OnboardingQuestions from './components/OnboardingQuestions';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [isNewUser, setIsNewUser] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is logged in
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        const newUserFlag = localStorage.getItem('isNewUser');
        setIsNewUser(newUserFlag === 'true');
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        {/* Redirect to the home screen for existing users */}
        {!isNewUser && user && <Navigate to="/home" />}
        {/* Onboarding route for new users */}
        {isNewUser && user && <Route path="/" element={<OnboardingQuestions />} />}
        {/* Redirect to login if not authenticated */}
        {!user && <Navigate to="/login" />}
      </Routes>
    </Router>
  );
}

export default App;
