import React, { useState } from "react";

import { Form, InputGroup, FormControl } from "react-bootstrap";

const AddCustomers = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Name" required />
      </Form.Group>

      <InputGroup className="mb-3">
      <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
          Email
        </Form.Label>
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>

      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Phone" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control as="textarea" placeholder="Address" rows={3} />
      </Form.Group>
    </Form>
  );
};

export default AddCustomers;
