import 'bootstrap/dist/css/bootstrap.css';
import '../assets/css/css_base.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

//================================================
const CardBS = function ({img: {id, name, src, desc }}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={src} style={{
        height:"180px",
        width: "100%",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }} />
      <Card.Body>
        <Card.Title><div style={{color:"black"}}>{name}</div></Card.Title>
        <Card.Text>
        <div style={{color:"black"}}>
          {desc}
         </div>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}



export  { CardBS };
