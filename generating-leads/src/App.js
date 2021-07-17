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
import DoingItYourself from './components/DoingItYourself/DoingItYourself';
import Bankrupcy from './components/Bankrupcy/Bankrupcy';
import DebtNegotiation from './components/DebtNegotiation/DebtNegotiation'
import CreditCounseling from './components/CreditCounseling/CreditCounseling';
import PersonalLoan from './components/PersonalLoan/PersonalLoan';



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
      <Route exact path="/DebtNegotiation" >
      <div className="content-div">
        <DebtNegotiation />
        <ReviewForm />
      </div>
      </Route>
      <Route exact path="/CreditCounseling" >
      <div className="content-div">  
        <CreditCounseling />
        <ReviewForm />
      </div>   
      </Route>
      <Route exact path="/PersonalLoan" >
      <div className="content-div"> 
        <PersonalLoan />
        <ReviewForm />
      </div>   
      </Route>
      <Route exact path="/Bankrupcy" >
      <div className="content-div"> 
        <Bankrupcy />
        <ReviewForm />
      </div>   
      </Route>
      <Route exact path="/DoingItYourself" >
      <div className="content-div"> 
        <DoingItYourself />
        <ReviewForm />
      </div>     
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
