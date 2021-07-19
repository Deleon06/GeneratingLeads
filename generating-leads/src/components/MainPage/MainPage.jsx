import "./MainPage.css"
import { Link } from "react-router-dom"

export default function MainPage() {
  return (
    <div className="Main-Page">
      <div className="img"></div>
      <h1>Welcome to the solution you've been looking for!</h1>
      <h4>Are you tired of looking for help but before you can get information the first thing they ask for is your social security number?</h4>
      <p>Here you will have your questions answered before you call!</p>
      
      <p>When it comes towards becoming debt free there are only 5 ways of really doing it outside of winning the lottery or having somebody giving you the money to pay it off.
        Here we will discuss those 5 ways and give examples of what type of people would be in a good position to benefit from each option.
        Those options are:
      </p>

      <li>Debt Negotiation</li>
      <li>Credit Counseling</li>
      <li>Personal Loans/Consolidation Loans</li>
      <li>Bankruptcy</li>
      <li>Doing It Yourself</li>
      <br />
      <p> Ideally we would like to help everybody with being able to do it themselves.
        Unfortunately that's not always possible.
        Sometimes people try for 30+ years trying themselves, but the interest won't let them.</p>
      <Link to ="./DebtNegotiation">
        <button className="Button">Start</button>
      </Link>
    </div >
  )
}