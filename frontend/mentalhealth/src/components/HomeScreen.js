// components/HomeScreen.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <div>
      <h1>Welcome to Your Mental Health App</h1>
      {/* Render content and features of the home screen */}
      <Link to="/logout">Logout</Link> {/* Implement logout functionality */}
    </div>
  );
}

export default HomeScreen;
