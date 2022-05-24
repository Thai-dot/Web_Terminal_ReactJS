import React from 'react'
import "./App.css";
//Pages
import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe'
import ErrorPage from './Pages/ErrorPage'
//Component:
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="MainBody">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/aboutme" element={<AboutMe />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App

