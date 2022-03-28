import React, { useState } from "react";

import { Form, Col, InputGroup, FormControl } from "react-bootstrap";

const AddOrders = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Form >
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Time Orders" required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control as="textarea" type="email" placeholder="Address" required rows={3} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="+84" />
      </Form.Group>

      <Form.Group className="mb-3" as={Col} controlId="formGridState">
        <Form.Select defaultValue="COD">
          <option>COD</option>
          <option>Card</option>
        </Form.Select>
      </Form.Group>

      <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <FormControl aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>

      <Form.Group className="mb-3" as={Col} controlId="formGridState">
        <Form.Select defaultValue="Processing">
          <option>Processing</option>
          <option>Delivered</option>
          <option>Pending</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
};

export default AddOrders;
