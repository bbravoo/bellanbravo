import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes, 
  Link
} from "react-router-dom";
import LandingPage from './LandingPage';
import Radio from './Radio';
import Music from './Music';
import About from './About';
import Contact from './Contact';



export default class NavBar extends Component{
    render(){
  return (
    <Router>
    <Navbar expand="lg" className="nav-bar">
      <Container className="items">
        <Navbar.Brand className="home" as={Link} to={"/"}>Home</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links">
            <Nav.Link className="me-auto" as={Link} to={"/About"}>About</Nav.Link>
            <Nav.Link className="me-auto" as={Link} to={"/Radio"}>Radio</Nav.Link>
            <Nav.Link className="me-auto" as={Link} to={"/Music"}>Music</Nav.Link>
            <Nav.Link className="me-auto" as={Link} to={"/Contact"}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
        <Routes>
          <Route path="/About" element={<About />}>
          </Route>
          <Route path="/Radio" element={<Radio />}>
          </Route>
          <Route path="/Contact" element={<Contact />}>
          </Route>
          <Route path="/Music" element={<Music />}>
          </Route>
          <Route path="/" element={<LandingPage />}>
          </Route>
        </Routes>
    </div>
    </Router>
  );
}
}
