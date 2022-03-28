import React, { useState } from "react";

import { Link } from "react-router-dom";

import Table from "../../Components/AdminPage/Table/Table";

import "../../Assets/Styles/Customer.css";



import {
  Button,
  Modal,
  Col,
  Row,
  Container,
  Form,
  FloatingLabel,
  Nav
} from "react-bootstrap";

const customerTableHead = [
  "",
  "name",
  "email",
  "phone",
  "total orders",
  "actions",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => {
  return (
    <tr className="actions" key={index}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.total_orders}</td>
      <td>
        <i class="bx bx-show-alt icon__actions-detail"></i>
        <i class="bx bx-trash icon__actions-delete"></i>
      </td>
    </tr>
  );
};

const Setting = () => {
  return (
    <div>
      <div className="page-header">
        <h2 className="page-header__text">Edit Profile</h2>
      </div>
      <div className="card">
        <div className="card__body">
          <Container>
            <Row>
              <Col sm={4}>
                <Form.Label className="mt-6">Profile Picture</Form.Label>
                <br />
                <br />
                <br />
                <Form.Label>Name</Form.Label>
                <br />
                <br />
                <br />
                <Form.Label>Email</Form.Label>
                <br />
                <br />
                <br />
                <Form.Label>Contact Number</Form.Label>
                <br />
                <br />
                <br />
                <Form.Label>Your Role</Form.Label>
                <br />
                <br />
                <br />
              </Col>
              <Col sm={8}>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                  <Form.Control type="file" multiple />
                </Form.Group>
                <br />
                <FloatingLabel
                  controlId="floatingInput"
                  label="Name"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="name" />
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingInput"
                  label="Phone Number"
                  className="mb-3"
                >
                  <Form.Control type="number" placeholder="360-943-7332" />
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Staff Role"
                >
                  <Form.Select aria-label="Floating label select example">
                    <option>Open this select menu</option>
                    <option value="1">Admin</option>
                    <option value="2">CEO</option>
                    <option value="3">Manager</option>
                    <option value="3">Account</option>
                    <option value="3">Driver</option>
                    <option value="3">Security Guard</option>
                  </Form.Select>
                </FloatingLabel>
                <br />
                <Nav className="justify-content-end">
                  <Button className="mt-2" variant="primary" size="lg">
                    Update Profile
                  </Button>
                </Nav>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Setting;
