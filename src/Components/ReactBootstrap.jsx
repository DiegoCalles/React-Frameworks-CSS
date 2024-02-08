import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Form, InputGroup, Row, Col, Button}from "react-bootstrap"




export default function ReactBootstrap() {
    

    return (
      <>
        <h2>React-Bootstrap</h2>
        <Navbar className="bg-body-tertiary justify-content-between">
          <Form inline>
            <InputGroup>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Navbar>
      </>
    );
}