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

export default function AddCate() {
  const [type, setType] = useState("");
  const [published, setPublished] = useState("");

  const history = useHistory();

  const accessToken = getToken();

  const PostData = () => {
    axios
      .post(
        `https://sneakershopfiveteam.herokuapp.com/category/`,
        {
          type,
          published,
        },
        {
          headers: { token: `Bearer ${accessToken}` },
        }
      )
      .then((res) => {
        alert("success");
        history.push("/categories");
      })
      .catch((error) => {
        console.log(error);
        console.log(accessToken);
      });
  };

  useEffect(() => {
    setType(sessionStorage.getItem("type"));
    setPublished(sessionStorage.getItem("published"));
  }, []);

  return (
    <div>
      <h3 className="page-header">Add Category</h3>

      <Form className="card">
        <FloatingLabel
          controlId="floatingInput"
          label="Category Type"
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

        <Button type="button" size="lg" variant="primary" onClick={PostData}>
          Add Category
        </Button>
      </Form>
    </div>
  );
}
