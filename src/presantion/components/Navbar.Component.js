import React from 'react'
import { Navbar , NavDropdown , Container,Nav } from 'react-bootstrap'
function NavBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg"  style = {{backgroundColor:'#DAF2EE'}} fixed = "top" >
  <Container >
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Navbar.Brand  href="#home">NASDAQ</Navbar.Brand>
     
    </Nav>
    <Nav>
    <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default NavBar
