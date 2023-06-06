import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';




function Header() {
  return (
    <div>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
          <i class="fa-solid fa-utensils me-2"></i>
            {'  '}
            Resto Cafe
          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header