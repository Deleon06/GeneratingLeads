import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Footer from "./components/Footer"
import LeadForm from "./components/LeadForm"
import NavBar from './components/NavBar'
import ReviewForm from './components/ReviewForm';
import Reviews from './components/Reviews';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">
        <LeadForm />
        <ReviewForm />
      </Route>  
      <Route exact path="/reviews">
        <ReviewForm />
        <Reviews />
      </Route>  
      <Footer />
    </div>
  );
}

export default App;
