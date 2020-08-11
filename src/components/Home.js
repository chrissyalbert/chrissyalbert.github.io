/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import headshot from './images/Albert-Chrissy-7089-square.jpg';
import './Home.css';

export default function Home(props) {
  return (
    <Container className="mb-3" >
      <Row className="banner" >
        <Col>
          <Card className="tracking-in-expand">
            <h1 >Hi, I'm Chrissy Albert.</h1>
            <h3 >I'm a Front-end Web Developer.</h3>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={4} >
          <Card className="about" >
            <h3>What I do:</h3>
            <ul className="px-2" >
              <li><a href="#portfolio">Design and build websites</a></li>
              <li><a href="https://github.com/chrissyalbert" target="_blank" rel='noreferrer'>Write, edit and test code</a></li>
              <li><a href="https://github.com/Women-Who-Code-Phoenix/lah" target="_blank" rel='noreferrer'>Contribute to projects</a> </li>
            </ul>
          </Card>
        </Col>
        <Col xs={12} lg={4} >
          <Card className="about" >
            <h3>Skills and Technologies</h3>
            <ul className="px-2">
              <li>Design: HTML, CSS, Bootstrap, Photoshop</li>
              <li>Programming: Javascript, React, Vue, Node.js</li>
            </ul>
          </Card>
        </Col>
        <Col xs={12} lg={4} >
        <Card className="me">
              <img className="img-fluid headshot" src={headshot} alt="Chrissy Albert headshot"></img>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}