import logo from './logo.svg';
import './App.css';
import React from 'react';
import Footer from "./components/Footer"
import LeadForm from "./components/LeadForm"
import NavBar from './components/NavBar'
import ReviewForm from './components/ReviewForm';


function App() {
  return (
    <div className="App">
      <NavBar />
      <LeadForm />
      <ReviewForm />
      <Footer />
    </div>
  );
}

export default App;
