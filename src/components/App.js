import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Home from './Home';
import Portfolio from "./Portfolio";
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <Container fluid className="wrapper">
      <Navbar id="triangles" expand="lg" sticky="top" collapseOnSelect>
        <Navbar.Brand href="#home" className="d-inline-block align-top pl-3">
          <h1>C</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav  defaultActiveKey="#home" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav.Item>
          < Nav.Item as="li">
              <Nav.Link eventKey="link-1" href="#portfolio">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2" href="#contact" >Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <main >
        <Container className="main-content" id="home">
          <Home />
        </Container>
        <Container className="main-content" id="portfolio">
          <Portfolio />
        </Container>
        <Container className="main-content" id="contact">
          <Contact />
        </Container>
      </main>
      <footer>
        <p>&#169;{new Date().getFullYear()} Chrissy Albert</p>
        <p>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
        <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
    </footer>
    </Container>
  );
}

export default App;
