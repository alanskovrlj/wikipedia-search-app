import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import WikipediaSearchApi from './pages/WikipediaSearchApi.js'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WikipediaSearchApi />} />
      </Routes>
    </div>
  );
}

export default App;
