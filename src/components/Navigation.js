import React, { useEffect, useState } from "react";
import { Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";
import { Input } from "semantic-ui-react";
import Image from "../Assets/cxzcz.jpg";
import "./NavBar.css";
function Navigation() {
    const [login, setlogin] = useState(true);
    const [signup, setsignup] = useState(true);
    useEffect(() => {
        window.location.pathname === '/login' ?setlogin(false):setlogin(true);
        window.location.pathname === '/signup' ?setsignup(false):setsignup(true);
        return () => {    
        }
    }, [])
  return (
    <div style={{ fontSize: "22px" }}>
      <Navbar bg="white" expand="lg">
        <Navbar.Brand href="/">
          <img src={Image} width="80px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Form inline>
            <div class="ui action input">
              <input type="text" placeholder="Search..." />
              <button class="ui icon button">
                <i aria-hidden="true" class="search icon"></i>
              </button>
            </div>
          </Form>
          {login&& <Nav.Link href="/login">
            <Button className="btn btn-primary btn-lg login-button">Login</Button>
          </Nav.Link>}
          {signup&&<Nav.Link href="/signup">
            <Button className="btn btn-primary btn-lg login-button">SignUp</Button>
          </Nav.Link>}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
