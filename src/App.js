import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Assuming you are using react-router-dom

// Import the Landing component
import Landing from './components/landing';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* You can add other routes here as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
