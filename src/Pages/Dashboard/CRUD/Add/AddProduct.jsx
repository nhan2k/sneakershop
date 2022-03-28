import React, { useState, useEffect } from "react";

import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import {getToken} from "../../../../Util/Common"

import {
  DropdownButton,
  Dropdown,
  Button,
  Row,
  Col,
  Form,
  Table,
  Modal,
  InputGroup,
  FormControl,
  FloatingLabel,
} from "react-bootstrap";

//Css Custom
const style = {
  width: "100%",
  position: "relative",
  height: "100px",
  color: "var(--txt-color)",
  backgroundColor: "var(--main-bg)",
  display: "flex",
  alignItems: "center",
  boxShadow: "var(--box-shadow)",
  borderRad: "var(--border-radius)",
  overflow: "hidden",
  borderStyle: "none",
  justifyContent: "center",
};

export default function AddProduct() {
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [status, setStatus] = useState("");

  const history = useHistory();

  const accessToken = getToken();

  const PostData = () => {
    axios
      .post(`https://sneakershopfiveteam.herokuapp.com/product/`, {
        sku,
        name,
        category,
        price,
        stock,
        status
      },{
        headers: { token: `Bearer ${accessToken}` },
    })
      .then((res) => {
        alert('success');
        history.push("/product");
      })
      .catch((error) => {
        console.log(error);
        console.log(accessToken);
      });
  };

  useEffect(() => {
    setSku(sessionStorage.getItem("sku"));
    setName(sessionStorage.getItem("name"));
    setCategory(sessionStorage.getItem("category"));
    setPrice(sessionStorage.getItem("price"));
    setStock(sessionStorage.getItem("stock"));
    setStatus(sessionStorage.getItem("status"));
  }, []);

  return (
    <div>
      <h3 className="page-header">Add Product</h3>

      <Form className="card">
        <FloatingLabel controlId="floatingInput" label="Sku">
          <Form.Control
            className="cars"
            type="text"
            placeholder="name"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Product Name">
          <Form.Control
            className="cars"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Category"
          className=""
        >
          <Form.Control
            className="cars"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Price"
          className=""
        >
          <Form.Control
            className="cars"
            type="text"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Stock Product"
          className=""
        >
          <Form.Control
            className="cars"
            type="number"
            placeholder="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Status Product"
          className=""
        >
          <Form.Control
            className="cars"
            type="text"
            placeholder="stock"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </FloatingLabel>
        <br></br>

        <Button type="button" size="lg" variant="primary" onClick={PostData}>
          Add Product
        </Button>
      </Form>
    </div>
  );
}
