import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import WikipediaSearch from './pages/WikipediaSearch.js'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WikipediaSearch />} />
      </Routes>
    </div>
  );
}

export default App;
