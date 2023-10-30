import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Nb.css'; // Import your custom CSS file
import { useNavigate } from 'react-router-dom';

const Nb = () => {
  const navigate=useNavigate();

  
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Task-26-10</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* Add the first button */}
          <Button variant="primary" className="mr-2 custom-button mx-2" onClick={()=>navigate("/Display")}>
          Display Data!
          </Button>
         
          {/* Add the second button */}
          <Button variant="secondary" className="custom-button mx-2" onClick={()=>navigate("/Add")}>
          Add Student
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nb;
