import logo from './logo.svg';
import './App.css';
import React from 'react';
import Footer from "./components/Footer"
import LeadForm from "./components/LeadForm"
import NavBar from './components/NavBar'
import ReviewForm from './components/ReviewForm';
import Reviews from './components/Reviews';


function App() {
  return (
    <div className="App">
      <NavBar />
      <LeadForm />
      <ReviewForm />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
