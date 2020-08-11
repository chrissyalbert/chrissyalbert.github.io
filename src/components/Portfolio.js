import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Porfolio.css';

export default function Portfolio(props) {
  return (
    <Container >
      <Row id="portfolio">
        <h1>Projects</h1>
      </Row>
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3" >
        <Col className="projects">
          <Card>
            <div id="college" className="image" ></div>
          </Card>
            <div className="text"><h3>College Search Engine</h3></div>
            <Button target="_blank" href="https://chrissyalbert.github.io/College/" >Learn More</Button>
        </Col>
        <Col className="projects" >
          <Card>
            <div id="covid" className="image" ></div>
          </Card>
            <div className="text"><h3>Covid-19 Case Tracker</h3></div>
            <Button target="_blank" href="https://chrissyalbert.github.io/Covid-19-app/" >Learn More</Button>
        </Col>
        <Col className="projects" >
          <Card>
            <div id="calculator" className="image" ></div>
          </Card>
            <div className="text"><h3>Cool Calculator</h3></div>
            <Button target="_blank" href="https://chrissyalbert.github.io/cool-calculator/" >Learn More</Button>
        </Col>
        <Col className="projects" >
          <Card>
            <div id="pomodoro" className="image" ></div>
          </Card>
            <div className="text"><h3>Pomodoro Productivity Timer</h3></div>
            <Button target="_blank" href="https://chrissyalbert.github.io/pomodoro/" >Learn More</Button>
        </Col>
        <Col className="projects" >
          <Card>
            <div id="product" className="image" ></div>
          </Card>
            <div className="text"><h3>Product Landing Page</h3></div>
            <Button target="_blank" href="https://codepen.io/chrissyalbert/full/LYVaeYN" >Learn More</Button>
        </Col>
        <Col className="projects" >
            <Card>
              <div id="drum" className="image" ></div>
            </Card>
              <div className="text"><h3>Drum Machine</h3></div>
              <Button target="_blank" href="https://codepen.io/chrissyalbert/full/QWyNMQW" >Learn More</Button>
          </Col>
          <Col className="projects" >
            <Card>
              <div id="minecraft" className="image" ></div>
            </Card>
              <div className="text"><h3>Survey Form</h3></div>
              <Button target="_blank" href="https://codepen.io/chrissyalbert/full/xxGmPKv" >Learn More</Button>
          </Col>
          <Col className="projects" >
            <Card>
              <div id="documentation" className="image" ></div>
            </Card>
              <div className="text"><h3>Documentation Page</h3></div>
              <Button target="_blank" href="https://codepen.io/chrissyalbert/full/RwPmPwx" >Learn More</Button>
          </Col>
          <Col className="projects" >
            <Card>
              <div id="markdown" className="image" ></div>
            </Card>
              <div className="text"><h3>Markdown Editor</h3></div>
              <Button target="_blank" href="https://codepen.io/chrissyalbert/full/pogjdvY" >Learn More</Button>
          </Col>

        </Row>
    </Container>
  );
}
