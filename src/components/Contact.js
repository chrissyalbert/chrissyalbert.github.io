import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import octocat from './images/github-logo.svg';
import linkedin from './images/linkedin.png';
import './Contact.css';

export default function Contact(props) {
  
  const coded = "Hit6TTo_SKaOtc@oSi11.H1N";
  const key = "IDJlZmseo0xparG7iWv85PLH4nXK2NTO1zA3Stjw6dCqFVyfEgbkRQhYMUu9Bc";
  const shift = coded.length;
  let link = "";
  for (let i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))===-1) {
      let ltr = coded.charAt(i);
      link += (ltr);
    }
    else {     
      let ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
      link += (key.charAt(ltr));
    }
  }
  const hrefLink = `mailto:${link}`;
  return (
    <Container className="my-3 contact">
      <Row>
        <h1>Contact Me</h1>
      </Row>
      <br/>
      <Row>
        <Col>
          <Card id="email">
          <a href={hrefLink} alt="Send me an email." >
            <svg  viewBox="0 0 16 16" class="bi bi-envelope img-fluid" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
            </svg>
          </a>
          </Card>
        </Col>
        <Col>
          <Card>
            {/*eslint-disable-next-line react/jsx-no-target-blank*/}
            <a href="https://github.com/chrissyalbert" target="_blank" rel='noreferrer'><img className="img-fluid" src={octocat} alt="Github logo" ></img></a>
          </Card>
        </Col>
        <Col>
          <Card>
            {/*eslint-disable-next-line react/jsx-no-target-blank*/}
            <a href="https://www.linkedin.com/in/chrissyalbert/" target="_blank" rel='noreferrer' ><img className="img-fluid" src={linkedin} alt="LinkedIn logo"></img></a>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}