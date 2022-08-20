import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'

import "../styles/Navbar.css";

function Navbar() {

  const [searchTerm, setSearchTerm] = useState();

  let navigate = useNavigate();

  const handleSubmit = () => {
    navigate(
      "/companyDetails",
      {state: {
        search: searchTerm
      }}
    )
  }

  return (
    <div>
      <Container className="mt-3">
        <Row>
          <Col><Button variant="outline-primary" href="/">Home</Button></Col>
          <Col><Button variant="outline-primary" href="/registerCompany">Add Company</Button></Col>
          <Col><Button variant="outline-primary" href="/listAllCompanies">List All Companies</Button></Col>
          <Col className="d-flex align-items-end"><Form.Control type="input" className="me-1" maxLength="5" placeholder="Company Code" onChange={ (event) => { setSearchTerm(event.target.value) } } /><Button variant="outline-primary" onClick={() => handleSubmit()}>Search</Button></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Navbar