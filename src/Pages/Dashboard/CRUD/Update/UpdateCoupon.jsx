import React, { useState, useEffect } from "react";

import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { getToken } from "../../../../Util/Common";
import {getID} from "../../../../Util/Common"

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

export default function UpdateCoupon() {
  //API
  const [_id, setID] = useState(null);
  const [index, setIndex] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [percentage, setPercentage] = useState("");
  const [type, setType] = useState("");

  const history = useHistory();

  const accessToken = getToken();

  const updateAPIData = () => {
    
    const Id = getID()

    axios
      .patch(
        `https://sneakershopfiveteam.herokuapp.com/coupon/${Id}`,
        {
          index,
          name,
          code,
          percentage,
          type,
        },
        {
          headers: { token: `Bearer ${accessToken}` },
        }
      )
      .then((res) => {
        alert("success");
        history.push("/discount");
        console.log(index);
        
      })
      .catch((err) => {
        console.log(_id);
        console.log(err);
      });
  };

  useEffect(() => {
    setID(sessionStorage.getItem("_id"));
    setIndex(sessionStorage.getItem("index"));
    setName(sessionStorage.getItem("name"));
    setCode(sessionStorage.getItem("code"));
    setPercentage(sessionStorage.getItem("percentage"));
    setType(sessionStorage.getItem("type"));
  }, []);

  return (
    <div>
      <h3 className="page-header">Update Coupon</h3>

      <Form className="card">
        <FloatingLabel controlId="floatingInput" label="Month Event">
          <Form.Control
            className="cars"
            type="text"
            value={index}
            onChange={(e) => setIndex(e.target.value)}
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Coupon Name">
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
          label="Coupon Code"
          className=""
        >
          <Form.Control
            className="cars"
            type="text"
            placeholder="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Discount Percentage"
          className=""
        >
          <Form.Control
            className="cars"
            type="number"
            placeholder="percentage"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Coupon Type"
          className=""
        >
          <Form.Control
            className="cars"
            type="text"
            placeholder="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </FloatingLabel>

        <br></br>

        <Button
          type="button"
          size="lg"
          variant="primary"
          onClick={updateAPIData}
        >
          Update Coupon
        </Button>
      </Form>
    </div>
  );
}

// export default Discount;
