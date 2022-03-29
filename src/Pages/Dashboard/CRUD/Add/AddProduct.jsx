import React, { useState, useEffect } from "react";

import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { getToken } from "../../../../Util/Common";

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
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [des, setDes] = useState("");
  const [stock, setStock] = useState("");
  const [country, setCountry] = useState("");
  const [status, setStatus] = useState("");

  const history = useHistory();

  const accessToken = getToken();

  const PostData = () => {
    axios
      .post(
        `https://sneakershopfiveteam.herokuapp.com/product/`,
        {
          sku,
          image,
          name,
          category,
          price,
          des,
          stock,
          country,
          status,
        },
        {
          headers: { token: `Bearer ${accessToken}` },
        }
      )
      .then((res) => {
        alert("success");
        history.push("/dashboard/product");
      })
      .catch((error) => {
        console.log(error);
        console.log(accessToken);
      });
  };

  useEffect(() => {
    setSku(sessionStorage.getItem("sku"));
    setImage(sessionStorage.getItem("image"));
    setName(sessionStorage.getItem("name"));
    setCategory(sessionStorage.getItem("category"));
    setPrice(sessionStorage.getItem("price"));
    setDes(sessionStorage.getItem("des"));
    setStock(sessionStorage.getItem("stock"));
    setCountry(sessionStorage.getItem("country"));
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

        {/* <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Image Product</Form.Label>
          <Form.Control
            type="file"
            multiple
            className="cars"
            placeholder="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group> */}

        <FloatingLabel controlId="floatingInput" label="Product Name">
          <Form.Control
            className="cars"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Category" className="">
          <Form.Control
            className="cars"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Price" className="">
          <Form.Control
            className="cars"
            type="text"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingTextarea2" label="Description Product">
          <Form.Control
            className="cars"
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            type="text"
            value={des}
            onChange={(e) => setDes(e.target.value)}
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
          label="Country"
          className=""
        >
          <Form.Control
            className="cars"
            type="text"
            placeholder="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
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
