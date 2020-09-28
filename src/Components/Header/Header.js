import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const Header = (props) => {
    const [filter , setFilter] = useState("");
    return(
      <header>
          <Container>
              <Row>
                  <Col><h1>To-Do-List</h1></Col>
                  <Col>
                    <Form>
                        <Form.Group controlId="filter">
                            <Form.Control 
                                type="text" 
                                placeholder="Search Items..." 
                                name="filter" 
                                onChange={(e) => {
                                    setFilter(e.target.value);
                                    props.handleFilter(e.target.value);}} 
                                value={filter} />
                        </Form.Group>
                    </Form>
                  </Col>
              </Row>
          </Container>
      </header>
    );
}

export default Header;