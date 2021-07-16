import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Footer from "./components/Footer/Footer"
import LeadForm from "./components/LeadForm/LeadForm"
import NavBar from './components/NavBar/NavBar'
import ReviewForm from './components/ReviewForm/ReviewForm';
import Reviews from './components/Reviews/Reviews';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/MainPage/MainPage';
import OptionPages from './components/OptionsPages/OptionsPages';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">
        <div className="content-div">
          <MainPage />
          <LeadForm />
        </div>
      </Route>  
      <Route exact path="/reviews">
        <ReviewForm />
      <Reviews />
      </Route>
      <Route exact path="/">
        <OptionPages />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
