import React from "react"
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"

//https://react-bootstrap.github.io/components/navbar/#navbar-api

export default function NavBar() {
  return (
  <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Container>
      <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Debt Relief Options" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/DebtNegotiation">Debt Negotiation</NavDropdown.Item>
            <NavDropdown.Item href="/CreditCounseling">Credit Counseling</NavDropdown.Item>
            <NavDropdown.Item href="/PersonalLoan">Personal Loan</NavDropdown.Item>
            <NavDropdown.Item href="/Bankruptcy">Bankruptcy</NavDropdown.Item>
            <NavDropdown.Item href="/DoingItYourself">Doing It Yourself</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/Investments">Investments</Nav.Link>
          <Nav.Link href="/reviews">Reviews</Nav.Link>
          <Nav.Link href="/aboutus">About Us</Nav.Link>     
        </Nav>
      </Navbar.Collapse>
    </Container>
</Navbar>

  )
}