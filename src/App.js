import React from 'react';
import Users from './components/users/Users'
import './App.css';
import Navbar from './components/layouts/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />     
      <div className="container mt-3">
        <Users />
      </div>
        
    </div>
  );
}

export default App;
